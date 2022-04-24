/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isBoolean from '../../src/isBoolean';

const KEY = 'booleans';

describe('is:isBoolean', () => {
    it(`❌ nil !== ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`✅ booleans === ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isBoolean(value)).toEqual(true);
            expect(isBoolean(value, true)).toEqual(true);
        });
    });

    it(`❌ integers !== ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ numbers !== ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ bigInts !== ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ strings !== ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ DOM alternative contexts !== ${KEY}`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            expect(isBoolean(value)).toEqual(value.constructor === Boolean);
            expect(isBoolean(value, true)).toEqual(value.constructor === Boolean);
        });
    });

    it(`➖ object instances !== || === ${KEY}`, () => {
        values.instances.forEach((value) => {
            if (value.constructor === Boolean) {
                expect(isBoolean(value)).toEqual(typeof value === 'boolean');
                expect(isBoolean(value, true)).toEqual(true);
            } else {
                expect(isBoolean(value)).toEqual(false);
                expect(isBoolean(value, true)).toEqual(false);
            }
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isBoolean(value)).toEqual(false);
            expect(isBoolean(value, true)).toEqual(false);
        });
    });
});
