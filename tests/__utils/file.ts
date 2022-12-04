import fs from 'fs';
import paths from './paths.js';

export default {
    files(path: string): string[] {
        return fs.readdirSync(`${paths.root}/${path}`);
    },
    get srcFiles(): string[] {
        return this.files('src');
    },
    get isSrcFiles(): string[] {
        return this.srcFiles.filter((file: string) => file.startsWith('is') && file.endsWith('.ts'));
    },
    get utilsSrcFiles(): string[] {
        return this.files('src/utils');
    },
};
