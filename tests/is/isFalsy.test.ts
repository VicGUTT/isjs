/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isFalsy from '../../src/isFalsy';

const KEY = 'falsy';

describe('is:isFalsy', () => {
    it(`✅ nil === ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isFalsy(value)).toEqual(true);
        });
    });

    it(`➖ booleans !== || === ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isFalsy(value)).toEqual(value === false);
        });
    });

    it(`➖ integers !== || === ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isFalsy(value)).toEqual([0, -0].includes(value));
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`➖ numbers !== || === ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isFalsy(value)).toEqual([0, -0, NaN].includes(value));
        });
    });

    it(`➖ bigInts !== || === ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isFalsy(value)).toEqual(value === 0n);
        });
    });

    it(`➖ strings !== || === ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isFalsy(value)).toEqual(value === '');
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`❌ DOM alternative contexts !== ${KEY}`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            expect(isFalsy(value)).toEqual(!value);
        });
    });

    it(`❌ object instances !== ${KEY}`, () => {
        values.instances.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isFalsy(value)).toEqual(false);
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        test(`isFalsy() === any falsy value | [${key}]`, () => {
            items.forEach((value) => {
                expect(isFalsy(value)).toEqual(!value);
            });
        });
    });
});
