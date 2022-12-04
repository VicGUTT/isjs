/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, it, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isTypedAs from '../../src/isTypedAs.js';
import isPrimitive from '../../src/isPrimitive.js';
import isArray from '../../src/isArray.js';
import isInt from '../../src/isInt.js';
import isObject from '../../src/isObject.js';
import isFunction from '../../src/isFunction.js';

// const KEY = 'typedAs';

describe('is/isTypedAs', () => {
    it(`✅ nil is of type -> nil`, () => {
        values.nil.forEach((value) => {
            expect(isTypedAs(value)).toEqual('nil');
        });
    });

    it(`✅ booleans (not Boolean instances) are of type -> bool`, () => {
        values.booleans.forEach((value) => {
            expect(isTypedAs(value)).toEqual('bool');
        });

        expect(isTypedAs(new Boolean(true))).toEqual('derivative');
    });

    it(`✅ integers are of type -> int`, () => {
        values.integers.forEach((value) => {
            expect(isTypedAs(value)).toEqual('int');
        });
    });

    it(`✅ floats are of type -> float`, () => {
        values.floats.forEach((value) => {
            expect(isTypedAs(value)).toEqual('float');
        });
    });

    it(`✅ numbers (not Number instances) are of type -> nan | infinity | int | float`, () => {
        values.numbers.forEach((value) => {
            if (Number.isNaN(value)) {
                expect(isTypedAs(value)).toEqual('nan');
                return;
            }

            if (value === Infinity) {
                expect(isTypedAs(value)).toEqual('infinity');
                return;
            }

            expect(isTypedAs(value)).toEqual(isInt(value) ? 'int' : 'float');
        });

        expect(isTypedAs(new Number(123))).toEqual('derivative');
    });

    it(`✅ bigInts are of type -> bigInt`, () => {
        values.bigInts.forEach((value) => {
            expect(isTypedAs(value)).toEqual('bigInt');
        });
    });

    it(`✅ strings (not String instances) are of type -> string`, () => {
        values.strings.forEach((value) => {
            expect(isTypedAs(value)).toEqual('string');
        });

        expect(isTypedAs(new String('hello'))).toEqual('derivative');
    });

    it(`✅ symbols are of type -> symbol`, () => {
        values.symbols.forEach((value) => {
            expect(isTypedAs(value)).toEqual('symbol');
        });
    });

    it(`✅ arrays are of type -> array`, () => {
        values.arrays.forEach((value) => {
            expect(isTypedAs(value)).toEqual('array');
        });

        expect(isTypedAs(new Array('hello'))).toEqual('array');
    });

    it(`✅ DOM elements are of type -> derivative`, () => {
        values.elements.forEach((value) => {
            expect(isTypedAs(value)).toEqual('derivative');
        });
    });

    it(`✅ DOM nodeLists are of type -> derivative`, () => {
        values.nodeLists.forEach((value) => {
            expect(isTypedAs(value)).toEqual('derivative');
        });
    });

    it(`✅ DOM alternative are of type -> derivative`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isTypedAs(value)).toEqual('derivative');
        });
    });

    it(`✅ functions are of type -> function`, () => {
        values.functions.forEach((value) => {
            expect(isTypedAs(value)).toEqual('function');
        });
    });

    it(`✅ classes are of type -> function`, () => {
        values.classes.forEach((value) => {
            expect(isTypedAs(value)).toEqual('function');
        });
    });

    it(`✅ object constructors are of type -> function`, () => {
        values.constructors.forEach((value) => {
            expect(isTypedAs(value)).toEqual('function');
        });
    });

    it(`➖ some invoked object constructors are of type -> function`, () => {
        values.invokedConstructors
            .filter((value) => !isPrimitive(value) && !isArray(value))
            .forEach((value) => {
                expect(isTypedAs(value)).toEqual('function');
            });
    });

    it(`✅ object instances are of type -> array | object | function | derivative`, () => {
        values.instances.forEach((value) => {
            if (isArray(value)) {
                expect(isTypedAs(value)).toEqual('array');
                return;
            }

            if (isObject(value)) {
                expect(isTypedAs(value)).toEqual('object');
                return;
            }

            if (isFunction(value)) {
                expect(isTypedAs(value)).toEqual('function');
                return;
            }

            expect(isTypedAs(value)).toEqual('derivative');
        });
    });

    it(`✅ objects are of type -> object`, () => {
        values.objects.forEach((value) => {
            expect(isTypedAs(value)).toEqual('object');
        });
    });
});
