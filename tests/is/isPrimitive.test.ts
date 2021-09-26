/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isPrimitive from '../../src/isPrimitive';

const KEY = 'primitive';

const _isPrimitive = (value: unknown): boolean => {
    if (value === null || value === undefined) {
        return true;
    }

    if (value === true || value === false) {
        return true;
    }

    if (Number.isNaN(value) || value === Infinity || typeof value === 'number') {
        return true;
    }

    return typeof value === 'string' || typeof value === 'symbol' || typeof value === 'bigint';
};

const filterPrimitives = (items: unknown[]): unknown[] => {
    return items.filter((item) => _isPrimitive(item));
};
const rejectPrimitives = (items: unknown[]): unknown[] => {
    return items.filter((item) => !_isPrimitive(item));
};

describe('is:isPrimitive', () => {
    it(`✅ nil === ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`✅ booleans === ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`✅ integers === ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`✅ floats === ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`✅ numbers === ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`✅ bigInts === ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`✅ strings === ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`✅ symbols === ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        rejectPrimitives(values.invokedConstructors).forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
        filterPrimitives(values.invokedConstructors).forEach((value) => {
            expect(isPrimitive(value)).toEqual(true);
        });
    });

    it(`❌ object instances !== ${KEY}`, () => {
        values.instances.forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isPrimitive(value)).toEqual(false);
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        test(`isPrimitive() === _isPrimitive() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isPrimitive(value)).toEqual(_isPrimitive(value));
            });
        });
    });
});
