/// <reference types="vitest" />

import fs from 'fs';
import path from 'path';
import jsdoc2md from 'jsdoc-to-markdown';
import { exec, type ExecException } from 'child_process';
import { defineConfig } from 'vite';

const lib = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const libName = lib.name.split('/')[1] ?? lib.name;
const year = new Date().getFullYear();

export default defineConfig({
    // /**
    //  * @see https://vitejs.dev/config/shared-options.html#define
    //  */
    // define: {
    //     __APP_VERSION__: lib.version,
    // },
    build: {
        /**
         * @see https://vitejs.dev/config/#build-target
         */
        target: `es${year - 2 < 2021 ? 2021 : year - 2}`,

        /**
         * @see https://vitejs.dev/config/#build-chunksizewarninglimit
         */
        chunkSizeWarningLimit: 10, // 10 kbs

        /**
         * @see https://vitejs.dev/config/#build-rollupoptions
         * @see https://rollupjs.org/guide/en/#big-list-of-options
         */
        rollupOptions: {
            input: './src/index.ts',
        },

        /**
         * @see https://vitejs.dev/config/#build-lib
         * @see https://vitejs.dev/guide/build.html#library-mode
         */
        lib: {
            entry: path.resolve(__dirname, './src/index.ts'),
            name: libName
                .split('-')
                .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`)
                .join(''),
            fileName: (format) => `_${libName}.${format}.${format === 'umd' ? 'c' : ''}js`,
        },
    },
    plugins: [
        {
            name: 'after-bundling-actions',
            closeBundle: async () => {
                await compileAllTsFiles();
                await generateReadme();

                consoleMessage('All done!');
            },
        },
    ],
    /**
     * @see https://vitest.dev/config/#configuration
     */
    test: {
        // global: true,
        environment: 'jsdom',
        /**
         * @see https://github.com/vitest-dev/vitest/blob/95b1ba4c17df1677136b39762c19d859db3f4cb2/packages/vitest/src/types/coverage.ts
         */
        coverage: {
            reportsDirectory: '.coverage',
            include: ['src/**/*.{ts,js}'],
            exclude: ['src/Exceptions/**/*.{ts,js}'],
            // Threshold
            statements: 90,
            branches: 90,
            functions: 90,
            lines: 90,
        },
    },
});

/* Actions
------------------------------------------------*/

async function compileAllTsFiles() {
    const paths = {
        index: './dist/index.js',
        VERSION: './dist/constants/VERSION.js',
    };

    consoleMessage('Running `tsc`...');

    const hasIndexFile = await execAsync('tsc', () => fs.existsSync(paths.index));

    if (hasIndexFile) {
        consoleMessage('Removing the `./dist/index.js` & `./dist/index.js.map` files...');

        fs.unlinkSync(paths.index);
        fs.unlinkSync(`${paths.index}.map`);
    }

    if (fs.existsSync(paths.VERSION)) {
        consoleMessage(
            `Replacing \`__APP_VERSION__\` with the app's version (${lib.version}) in \`${paths.VERSION}\`...`
        );

        fs.writeFileSync(
            paths.VERSION,
            fs.readFileSync(paths.VERSION, 'utf-8').replace("'__APP_VERSION__'", `'${lib.version}'`)
        );
    }

    /**
     * Fallback for: https://vitejs.dev/config/shared-options.html#define,
     * because for some reason it causes the tests to error out.
     */

    ['./dist/_isjs.es.js', './dist/_isjs.umd.cjs'].forEach(path => {
        if (!fs.existsSync(path)) {
            return;
        }

        consoleMessage(
            `Replacing \`__APP_VERSION__\` with the app's version (${lib.version}) in \`${path}\`...`
        );

        fs.writeFileSync(
            path,
            fs.readFileSync(path, 'utf-8').replace('"__APP_VERSION__"', `"${lib.version}"`)
        );
    });
}

async function generateReadme() {
    consoleMessage('Generating `README.md`...');

    const data = (await jsdoc2md.getJsdocData({ files: 'dist/*.js' })).filter((item) => item.comment?.trim().length);
    const content = data
        .map((item) => {
            const fileName = item.meta.filename;
            const testFileName = fileName.replace(/\.js$/, '.test.ts');
            const functionName = fileName.replace(/\.js$/, '');
            const methodName = ((val) => (val = val.replace(/^is/, '')) && val.charAt(0).toLowerCase() + val.slice(1))(
                functionName
            );

            const heading = `### • **is.${methodName} / ${functionName}** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/${functionName}.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/${testFileName}))_`;
            const examples = item.examples?.join('\n\n') || '';
            const description = item.description /* ?.replace(/(\r\n|\r|\n)/g, ' ') */ || '';
            const see = item.see?.length
                ? item.see.reduce((acc, current) => (acc += `- [${current}](${current})\n`), `See:\n`).trim()
                : '';
            const alias = {
                value: item.alias || '',
                get target() {
                    return this.value.substring(0, this.value.indexOf(' '));
                },
                get description() {
                    return this.value.substring(this.value.indexOf(' ')).trim();
                },
                get text() {
                    return this.description.replace(
                        `\`${this.target}\``,
                        `[\`${this.target}\`](#-${this.target}--${this.target}-source--tests)`
                    );
                },
            };

            if (alias.value) {
                return `${heading}\n\n${alias.text}\n\n${see}\n\n${examples}`.trim();
            }

            return `${heading}\n\n${description}\n\n${see}\n\n${examples}`.trim();
        })
        .join('\n\n');

    if (!content.trim().length) {
        return;
    }

    const readme = fs.readFileSync('./README.md', 'utf-8');

    const oldContent = readme.substring(
        readme.lastIndexOf('<!-- {{ CONTENT }} -->') + '<!-- {{ CONTENT }} -->'.length,
        readme.lastIndexOf('<!-- /{{ CONTENT }} -->')
    );

    fs.writeFileSync('./README.md', readme.replace(oldContent, `\n${content}\n`));

    consoleMessage('Formatting `README.md`...');

    await execAsync('prettier README.md --write');
    await execAsync('git status', async (_, stdout) => {
        if (!stdout.replace(/\s/g, '').includes('modified:README.md')) {
            return;
        }

        consoleMessage('Committing `README.md`...');

        await execAsync('git add README.md');
        await execAsync('git commit -m "docs: `README.md` update"');
    });
}

/* Helpers
------------------------------------------------*/

async function execAsync(
    command: string,
    callback?: (error: ExecException | null, stdout: string, stderr: string) => void
) {
    return await new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            try {
                return error ? reject({ error, stdout, stderr }) : resolve(callback && callback(error, stdout, stderr));
            } catch (e) {
                return reject(e);
            }
        });
    });
}

function consoleMessage(message: string): void {
    process.stdout.write('\n');

    console.log(message);
}
