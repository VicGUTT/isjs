/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isNumeric from '../../src/isNumeric';
import { UnknownObject } from '../../src/types';

const KEY = 'numerics';

const _isNumeric = (value: unknown): boolean => {
    if (Number.isNaN(value)) {
        return false;
    }

    if (Number.isInteger(value)) {
        return true;
    }

    if (typeof value === 'number' && Number.isFinite(value)) {
        return true;
    }

    if (typeof value === 'number' && Number.isInteger(Math.floor(value))) {
        return true;
    }

    if (typeof value === 'string' && !Number.isNaN(parseFloat(value))) {
        return true;
    }

    return (value as UnknownObject)?.constructor === Number && value !== Infinity;
};

describe('is:isNumeric', () => {
    it(`❌ nil !== ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`❌ booleans !== ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`✅ integers === ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isNumeric(value)).toEqual(true);
        });
    });

    it(`✅ floats === ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isNumeric(value)).toEqual(true);
        });
    });

    it(`➖ numbers !== || === ${KEY}`, () => {
        values.numbers.forEach((value) => {
            if (Number.isNaN(value) || !Number.isFinite(value)) {
                expect(isNumeric(value)).toEqual(false);
            } else {
                expect(isNumeric(value)).toEqual(true);
            }
        });
    });

    it(`❌ bigInts !== ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`➖ strings !== || === ${KEY}`, () => {
        values.strings.forEach((value) => {
            if (value === '0' || value === '-0' || +value) {
                expect(isNumeric(value)).toEqual(true);
            } else {
                expect(isNumeric(value)).toEqual(false);
            }
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            if (value.constructor === Number) {
                expect(isNumeric(value)).toEqual(true);
            } else {
                expect(isNumeric(value)).toEqual(false);
            }
        });
    });

    it(`➖ object instances !== || === ${KEY}`, () => {
        values.instances.forEach((value) => {
            if (value.constructor === Number) {
                expect(isNumeric(value)).toEqual(true);
            } else {
                expect(isNumeric(value)).toEqual(false);
            }
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isNumeric(value)).toEqual(false);
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        test(`isNumeric() === _isNumeric() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isNumeric(value)).toEqual(_isNumeric(value));
            });
        });
    });
});
