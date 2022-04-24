/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isTruthy from '../../src/isTruthy';

const KEY = 'truthy';

describe('is:isTruthy', () => {
    it(`❌ nil !== ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isTruthy(value)).toEqual(false);
        });
    });

    it(`➖ booleans !== || === ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isTruthy(value)).toEqual(value === true);
        });
    });

    it(`➖ integers !== || === ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isTruthy(value)).toEqual(![0, -0].includes(value));
        });
    });

    it(`✅ floats === ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`➖ numbers !== || === ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isTruthy(value)).toEqual(![0, -0, NaN].includes(value));
        });
    });

    it(`➖ bigInts !== || === ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isTruthy(value)).toEqual(value !== 0n);
        });
    });

    it(`➖ strings !== || === ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isTruthy(value)).toEqual(value !== '');
        });
    });

    it(`✅ symbols === ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`✅ arrays === ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`✅ DOM elements === ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`✅ DOM nodeLists === ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`✅ DOM alternative contexts === ${KEY}`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`✅ functions === ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`✅ classes === ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`✅ object constructors === ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            expect(isTruthy(value)).toEqual(!!value);
        });
    });

    it(`✅ object instances === ${KEY}`, () => {
        values.instances.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    it(`✅ objects === ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isTruthy(value)).toEqual(true);
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        test(`isTruthy() === any truthy value | [${key}]`, () => {
            items.forEach((value) => {
                expect(isTruthy(value)).toEqual(!!value);
            });
        });
    });
});
