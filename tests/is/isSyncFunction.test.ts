/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isSyncFunction from '../../src/isSyncFunction';

const KEY = 'syncFunctions';

describe('is:isSyncFunction', () => {
    it(`❌ nil !== ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ booleans !== ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ integers !== ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ numbers !== ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ bigInts !== ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ strings !== ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });

    it(`➖ functions !== || === ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(value.constructor === Function);
        });
    });

    it(`✅ classes === ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(true);
        });
    });

    it(`✅ object constructors === ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(true);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(value.constructor === Function);
        });
    });

    it(`➖ object instances !== || === ${KEY}`, () => {
        values.instances.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(value.constructor === Function);
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isSyncFunction(value)).toEqual(false);
        });
    });
});
