import type { Type } from './types/index.js';
import isBool from './isBool.js';
import isDerivative from './isDerivative.js';
import isNil from './isNil.js';
import isNull from './isNull.js';
import isNumber from './isNumber.js';
import isPrimitive from './isPrimitive.js';
import isUndefined from './isUndefined.js';
import isNan from './isNan.js';
import isInfinity from './isInfinity.js';
import isInt from './isInt.js';
import isFloat from './isFloat.js';
import isString from './isString.js';
import isSymbol from './isSymbol.js';
import isBigInt from './isBigInt.js';
import isArray from './isArray.js';
import isObject from './isObject.js';
import isFunction from './isFunction.js';

/**
 * Determines whether the given value is of the given type or
 * one of the given types (if an array is given as a second argument).
 *
 * Types can only be one of the following:
 * - nil
 * - number
 * - primitive
 * - derivative
 * - null
 * - undefined
 * - bool
 * - nan
 * - infinity
 * - int
 * - float
 * - string
 * - symbol
 * - bigInt
 * - array
 * - object
 * - function
 *
 * @example
 * ```js
 * isOfType(null, 'undefined'); // false
 * isOfType(null, 'bool'); // false
 * isOfType(null, 'null'); // true
 * isOfType(null, 'nil'); // true
 *
 * isOfType(null, ['undefined']); // false
 * isOfType(null, ['undefined', 'bool', 'array']); // false
 * isOfType(null, ['null', 'undefined', 'nil']); // true
 * isOfType(null, ['undefined', 'nil']); // true
 * isOfType(null, ['nil']); // true
 * isOfType(null, ['null']); // true
 * isOfType(null, ['primitive']); // true
 * isOfType(null, ['undefined', 'bool', 'array', 'primitive']); // true
 * ```
 */
export default function isOfType(value: unknown, expectedType: Type | Type[]): boolean {
    if (!isArray(expectedType)) {
        return _isOfType(value, expectedType);
    }

    return expectedType.some((type) => _isOfType(value, type));
}

function _isOfType(value: unknown, expectedType: Type): boolean {
    const is: { [key in Type]: (value: unknown) => boolean } = {
        nil: isNil,
        number: isNumber,
        primitive: isPrimitive,
        derivative: isDerivative,
        null: isNull,
        undefined: isUndefined,
        bool: isBool,
        nan: isNan,
        infinity: isInfinity,
        int: isInt,
        float: isFloat,
        string: isString,
        symbol: isSymbol,
        bigInt: isBigInt,
        array: isArray,
        object: isObject,
        function: isFunction,
    };

    return is[expectedType](value);
}
