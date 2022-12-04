/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, it, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isNullOrUndefined from '../../src/isNullOrUndefined.js';

const KEY = 'nullOrUndefined';

describe('is/isNullOrUndefined', () => {
    it(`✅ nil === ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(true);
        });
    });

    it(`❌ booleans !== ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ integers !== ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ numbers !== ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ bigInts !== ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ strings !== ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ arrays !== ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ DOM nodeLists !== ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ DOM alternative contexts !== ${KEY}`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ invoked object constructors !== ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ object instances !== ${KEY}`, () => {
        values.instances.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isNullOrUndefined(value)).toEqual(false);
        });
    });
});
