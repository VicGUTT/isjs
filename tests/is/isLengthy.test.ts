/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, it, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isLengthy from '../../src/isLengthy.js';

const KEY = 'lengthy';

describe('is/isLengthy', () => {
    it(`❌ nil !== ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`❌ booleans !== ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`❌ integers !== ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`❌ numbers !== ${KEY}`, () => {
        values.numbers.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`❌ bigInts !== ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`✅ strings === ${KEY}`, () => {
        values.strings.forEach((value) => {
            expect(isLengthy(value)).toEqual(true);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`✅ arrays === ${KEY}`, () => {
        values.arrays.forEach((value) => {
            expect(isLengthy(value)).toEqual(true);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`✅ DOM nodeLists === ${KEY}`, () => {
        values.nodeLists.forEach((value) => {
            expect(isLengthy(value)).toEqual(true);
        });
    });

    it(`❌ DOM alternative contexts !== ${KEY}`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });

    it(`✅ functions === ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isLengthy(value)).toEqual(true);
        });
    });

    it(`✅ classes === ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isLengthy(value)).toEqual(true);
        });
    });

    it(`✅ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isLengthy(value)).toEqual(true);
        });
    });

    it(`➖ invoked object constructors !== || === ${KEY}`, () => {
        values.invokedConstructors.forEach((value) => {
            // @ts-expect-error yolo
            expect(isLengthy(value)).toEqual(typeof value?.length === 'number');
        });
    });

    it(`➖ object instances !== || === ${KEY}`, () => {
        values.instances.forEach((value) => {
            expect(isLengthy(value)).toEqual(typeof value?.length === 'number');
        });
    });

    it(`❌ objects !== ${KEY}`, () => {
        values.objects.forEach((value) => {
            expect(isLengthy(value)).toEqual(false);
        });
    });
});
