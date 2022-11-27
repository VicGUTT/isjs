import { describe, it, expect } from 'vitest';
import fs from 'fs';
import paths from './__utils/paths';
import file from './__utils/file';

const makeTestFileName = (file: string) => file.replace(/\.ts$/, '.test.ts');

describe('_', () => {
    describe('All `is*` functions have their own dedicated tests', () => {
        file.isSrcFiles.forEach((file) => {
            const testFileName = makeTestFileName(file);

            it(`./tests/is/${testFileName} exists`, () => {
                expect(fs.existsSync(`${paths.tests}/is/${testFileName}`)).toEqual(true);
            });
        });
    });

    describe('All `utils/*` functions have their own dedicated tests', () => {
        file.utilsSrcFiles.forEach((file) => {
            const testFileName = makeTestFileName(file);

            it(`./tests/utils/${testFileName} exists`, () => {
                expect(fs.existsSync(`${paths.tests}/utils/${testFileName}`)).toEqual(true);
            });
        });
    });
});
