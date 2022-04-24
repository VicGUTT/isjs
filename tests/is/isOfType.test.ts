/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import type { Type } from '../../src/types';
import values from '../__Fixtures/values';
import isOfType from '../../src/isOfType';
import isInt from '../../src/isInt';
import isPrimitive from '../../src/isPrimitive';
import isArray from '../../src/isArray';
import TYPES from '../../src/constants/TYPES';
import isTypedAs from '../../src/isTypedAs';
import isNumber from '../../src/isNumber';
import isNull from '../../src/isNull';
import isUndefined from '../../src/isUndefined';
import isDerivative from '../../src/isDerivative';

// const KEY = 'ofType';

const __isOfType = (value: unknown, expectedType: Type): boolean => {
    const actualType = isTypedAs(value);

    if (actualType === expectedType) {
        return true;
    }

    if (expectedType === 'number' && ['int', 'float', 'infinity'].includes(actualType)) {
        return true;
    }

    if (expectedType === 'number' && actualType === 'derivative') {
        return isNumber(value);
    }

    if (expectedType === 'null') {
        return isNull(value);
    }

    if (expectedType === 'undefined') {
        return isUndefined(value);
    }

    if (expectedType === 'primitive') {
        return isPrimitive(value);
    }

    if (expectedType === 'derivative') {
        return isDerivative(value);
    }

    return false;
};

const _isOfType = (value: unknown, expectedType: Type | Type[]): boolean => {
    if (!isArray(expectedType)) {
        return __isOfType(value, expectedType);
    }

    return expectedType.map((type) => __isOfType(value, type)).includes(true);
};

const shuffleArray = (array: Type[]): Type[] => {
    return array.sort(() => Math.random() - 0.5);
};

const rand = (max: number): number => {
    return Math.floor(Math.random() * max) + 1;
};

const randomTypes = (): Type[] => {
    return shuffleArray(TYPES).slice(0, rand(TYPES.length));
};

describe('is:isOfType', () => {
    it(`✅ nil is of type -> nil`, () => {
        values.nil.forEach((value) => {
            expect(isOfType(value, 'nil')).toEqual(true);
        });
    });

    it(`✅ booleans (not Boolean instances) are of type -> bool`, () => {
        values.booleans.forEach((value) => {
            expect(isOfType(value, 'bool')).toEqual(true);
        });

        expect(isOfType(new Boolean(true), 'bool')).toEqual(false);
        expect(isOfType(new Boolean(true), 'derivative')).toEqual(true);
    });

    it(`✅ integers are of type -> int`, () => {
        values.integers.forEach((value) => {
            expect(isOfType(value, 'int')).toEqual(true);
        });
    });

    it(`✅ floats are of type -> float`, () => {
        values.floats.forEach((value) => {
            expect(isOfType(value, 'float')).toEqual(true);
        });
    });

    it(`➖ numbers (not Number instances) are of type -> nan | infinity | int | float | number`, () => {
        values.numbers.forEach((value) => {
            if (Number.isNaN(value)) {
                expect(isOfType(value, 'nan')).toEqual(true);
                expect(isOfType(value, 'number')).toEqual(false);
                return;
            }

            if (value === Infinity) {
                expect(isOfType(value, 'infinity')).toEqual(true);
                expect(isOfType(value, 'number')).toEqual(true);
                return;
            }

            expect(isOfType(value, isInt(value) ? 'int' : 'float')).toEqual(true);
            expect(isOfType(value, 'number')).toEqual(true);
        });

        expect(isOfType(new Number(123), 'number')).toEqual(false);
        expect(isOfType(new Number(123), 'derivative')).toEqual(true);
    });

    it(`✅ bigInts are of type -> bigInt`, () => {
        values.bigInts.forEach((value) => {
            expect(isOfType(value, 'bigInt')).toEqual(true);
        });
    });

    it(`✅ strings (not String instances) are of type -> string`, () => {
        values.strings.forEach((value) => {
            expect(isOfType(value, 'string')).toEqual(true);
        });

        expect(isOfType(new String('hey'), 'string')).toEqual(false);
        expect(isOfType(new String('hey'), 'derivative')).toEqual(true);
    });

    it(`✅ symbols are of type -> symbol`, () => {
        values.symbols.forEach((value) => {
            expect(isOfType(value, 'symbol')).toEqual(true);
        });
    });

    it(`✅ arrays are of type -> array`, () => {
        values.arrays.forEach((value) => {
            expect(isOfType(value, 'array')).toEqual(true);
        });
    });

    it(`✅ DOM elements are of type -> derivative`, () => {
        values.elements.forEach((value) => {
            expect(isOfType(value, 'derivative')).toEqual(true);
        });
    });

    it(`✅ DOM nodeLists are of type -> derivative`, () => {
        values.nodeLists.forEach((value) => {
            expect(isOfType(value, 'derivative')).toEqual(true);
        });
    });

    it(`✅ DOM alternative contexts are of type -> derivative`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isOfType(value, 'derivative')).toEqual(true);
        });
    });

    it(`✅ functions are of type -> function`, () => {
        values.functions.forEach((value) => {
            expect(isOfType(value, 'function')).toEqual(true);
        });
    });

    it(`✅ classes are of type -> function`, () => {
        values.classes.forEach((value) => {
            expect(isOfType(value, 'function')).toEqual(true);
        });
    });

    it(`✅ object constructors are of type -> function`, () => {
        values.constructors.forEach((value) => {
            expect(isOfType(value, 'function')).toEqual(true);
        });
    });

    it(`➖ some invoked object constructors are of type -> function`, () => {
        values.invokedConstructors
            .filter((value) => !isPrimitive(value) && !isArray(value))
            .forEach((value) => {
                expect(isOfType(value, 'function')).toEqual(true);
            });
    });

    it(`➖ some object instances are of type -> derivative`, () => {
        values.instances
            .filter((value) => value && typeof value === 'object')
            .forEach((value) => {
                expect(isOfType(value, 'derivative')).toEqual(true);
            });
    });

    it(`✅ objects are of type -> object`, () => {
        values.objects.forEach((value) => {
            expect(isOfType(value, 'object')).toEqual(true);
        });
    });

    it(`can test against an array of expected types`, () => {
        expect(isOfType(null, ['null', 'undefined', 'nil'])).toEqual(true);
        expect(isOfType(null, ['undefined', 'nil'])).toEqual(true);
        expect(isOfType(null, ['nil'])).toEqual(true);
        expect(isOfType(null, ['null'])).toEqual(true);
        expect(isOfType(null, ['undefined'])).toEqual(false);
        expect(isOfType(null, ['undefined', 'bool', 'array'])).toEqual(false);
        expect(isOfType(null, ['undefined', 'bool', 'array', 'primitive'])).toEqual(true);
        expect(isOfType(null, ['primitive'])).toEqual(true);
    });

    Object.entries(values).forEach(([key, items]) => {
        TYPES.forEach((type) => {
            test(`isOfType() === _isOfType() | [${key} - ${type}]`, () => {
                items.forEach((value) => {
                    expect(isOfType(value, type)).toEqual(_isOfType(value, type));

                    const _randomTypes = randomTypes();

                    expect(isOfType(value, _randomTypes)).toEqual(_isOfType(value, _randomTypes));
                });
            });
        });
    });
});
