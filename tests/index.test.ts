import { describe, test, expect } from 'vitest';
import values from './__Fixtures/values.js';
import file from './__utils/file.js';
import is from '../src/index.js';
import TYPES, { SUB_TYPES, SUPER_TYPES } from '../src/constants/TYPES.js';
import VERSION from '../src/constants/VERSION.js';

type _Meta = {
    glob: (...args: unknown[]) => Record<string, { default: (value: unknown) => boolean }>;
};

const strFiles = (import.meta as unknown as _Meta).glob('../src/*.ts', { eager: true });

describe('index', () => {
    describe(`is: own props`, () => {
        test(`is.SUPER_TYPES === SUPER_TYPES`, () => {
            expect(is.SUPER_TYPES).toEqual(SUPER_TYPES);
        });
        test(`is.SUB_TYPES === SUB_TYPES`, () => {
            expect(is.SUB_TYPES).toEqual(SUB_TYPES);
        });
        test(`is.TYPES === TYPES`, () => {
            expect(is.TYPES).toEqual(TYPES);
        });

        test(`is.VERSION === VERSION`, () => {
            expect(is.VERSION).toEqual(VERSION);
        });

        // test(`is()`, () => {
        //     //
        // });
    });

    file.isSrcFiles.forEach((file) => {
        const imported = {
            name: file.replace('.ts', ''),
            run: strFiles[`../src/${file}`].default,
        };
        const method = {
            get name(): string {
                return this.makeName(imported.name);
            },
            get run(): (...args: unknown[]) => unknown {
                return is[this.name];
            },
            makeName(val: string): string {
                return (val = val.replace(/^is/, '')) && val.charAt(0).toLowerCase() + val.slice(1);
            },
        };

        describe(`is:${method.name}`, () => {
            test(`is.${method.name} === ${imported.name}`, () => {
                expect(method.run).toEqual(imported.run);
            });

            Object.entries(values).forEach(([key, items]) => {
                test(`is.${method.name}() === ${imported.name}() | ${key}`, () => {
                    items.forEach((value) => {
                        expect(method.run(value)).toEqual(imported.run(value));
                    });
                });
            });
        });
    });
});
