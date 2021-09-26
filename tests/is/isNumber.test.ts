/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isNumber from '../../src/isNumber';
import { UnknownObject } from '../../src/types';

const KEY = 'numbers';

const _isNumber = (value: unknown, allowConstructorInstances = false): boolean => {
    const test = (value as UnknownObject)?.constructor === Number;
    const isObject = typeof value === 'object';

    if (allowConstructorInstances && isObject) {
        return test;
    }

    if (allowConstructorInstances && !isObject) {
        return test && !Number.isNaN(value);
    }

    if (!allowConstructorInstances && isObject) {
        return false;
    }

    if (Number.isNaN(value)) {
        return false;
    }

    if (Number.isInteger(value)) {
        return true;
    }

    if (typeof value === 'number' && !Number.isFinite(value)) {
        return true;
    }

    if (typeof value === 'number' && Number.isInteger(Math.floor(value))) {
        return true;
    }

    return test;
};

describe('is:isNumber', () => {
    it(`❌ nil !== ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ booleans !== ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`✅ integers === ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isNumber(value)).toEqual(true);
            expect(isNumber(value, true)).toEqual(true);
        });
    });

    it(`✅ floats === ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isNumber(value)).toEqual(true);
            expect(isNumber(value, true)).toEqual(true);
        });
    });

    it(`➖ numbers !== || === ${KEY}`, () => {
        values.numbers.forEach((value) => {
            if (Number.isNaN(value)) {
                expect(isNumber(value)).toEqual(false);
                expect(isNumber(value, true)).toEqual(false);
            } else {
                expect(isNumber(value)).toEqual(true);
                expect(isNumber(value, true)).toEqual(true);
            }
        });
    });

    it(`❌ bigInts !== ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ strings !== ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            if (value.constructor === Number) {
                expect(isNumber(value)).toEqual(true);
                expect(isNumber(value, true)).toEqual(true);
            } else {
                expect(isNumber(value)).toEqual(false);
                expect(isNumber(value, true)).toEqual(false);
            }
        });
    });

    it(`➖ object instances !== || === ${KEY}`, () => {
        values.instances.forEach((value) => {
            if (value.constructor === Number) {
                expect(isNumber(value)).toEqual(typeof value === 'number');
                expect(isNumber(value, true)).toEqual(true);
            } else {
                expect(isNumber(value)).toEqual(false);
                expect(isNumber(value, true)).toEqual(false);
            }
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isNumber(value)).toEqual(false);
            expect(isNumber(value, true)).toEqual(false);
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        test(`isNumber() === _isNumber() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isNumber(value)).toEqual(_isNumber(value));
                expect(isNumber(value, true)).toEqual(_isNumber(value, true));
            });
        });
    });
});
