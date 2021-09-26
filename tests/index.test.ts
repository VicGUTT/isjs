import values from './__Fixtures/values';
import file from './__utils/file';
import is from '../src';
import TYPES, { SUB_TYPES, SUPER_TYPES } from '../src/constants/TYPES';
import VERSION from '../src/constants/VERSION';

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
        run: require(`../src/${file}`).default, // eslint-disable-line @typescript-eslint/no-var-requires
    };
    const method = {
        get name(): string {
            return this.makeName(imported.name);
        },
        get run(): (...args: unknown[]) => unknown {
            // @ts-expect-error Go take a walk TS
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
