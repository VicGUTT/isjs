/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, it, expect } from 'vitest';
import values from '../__Fixtures/values';
import isString from '../../src/isString';

const KEY = 'strings';

describe('is/isString', () => {
    it(`❌ nil !== ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ booleans !== ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ integers !== ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ numbers !== ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ bigInts !== ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`✅ strings === ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isString(value)).toEqual(true);
            expect(isString(value, true)).toEqual(true);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ DOM alternative contexts !== ${KEY}`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isString(value)).toEqual(false);
            expect(isString(value, true)).toEqual(false);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            expect(isString(value)).toEqual(value.constructor === String);
            expect(isString(value, true)).toEqual(value.constructor === String);
        });
    });

    it(`➖ object instances !== || === ${KEY}`, () => {
        values.instances.forEach((value) => {
            if (value.constructor === String) {
                expect(isString(value)).toEqual(typeof value === 'string');
                expect(isString(value, true)).toEqual(true);
            } else {
                expect(isString(value)).toEqual(false);
                expect(isString(value, true)).toEqual(false);
            }
        });
    });

    it(`➖ objects !== || === ${KEY}`, () => {
        values.objects.forEach((value) => {
            if (value.constructor === String) {
                expect(isString(value)).toEqual(typeof value === 'string');
                expect(isString(value, true)).toEqual(true);
            } else {
                expect(isString(value)).toEqual(false);
                expect(isString(value, true)).toEqual(false);
            }
        });
    });
});
