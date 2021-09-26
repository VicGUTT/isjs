/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isInteger from '../../src/isInteger';

const KEY = 'integers';

const _isInteger = (value: unknown): boolean => {
    if (typeof value !== 'number' || value.constructor !== Number) {
        return false;
    }

    if (Number.isNaN(value)) {
        return false;
    }

    if (!Number.isFinite(value)) {
        return false;
    }

    return Number.isInteger(value) && !(value + '').includes('.');
};

describe('is:isInteger', () => {
    it(`❌ nil !== ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ booleans !== ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`✅ integers === ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isInteger(value)).toEqual(true);
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`➖ numbers !== || === ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isInteger(value)).toEqual(_isInteger(value));
        });
    });

    it(`❌ bigInts !== ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ strings !== ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            expect(isInteger(value)).toEqual(_isInteger(value));
        });
    });

    it(`❌ object instances !== ${KEY}`, () => {
        values.instances.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isInteger(value)).toEqual(false);
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        test(`isInteger() === _isInteger() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isInteger(value)).toEqual(_isInteger(value));
            });
        });
    });
});
