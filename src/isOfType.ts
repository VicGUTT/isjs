import isBool from './isBool';
import isDerivative from './isDerivative';
import isNil from './isNil';
import isNull from './isNull';
import isNumber from './isNumber';
import isPrimitive from './isPrimitive';
import isUndefined from './isUndefined';
import isNan from './isNan';
import isInfinity from './isInfinity';
import isInt from './isInt';
import isFloat from './isFloat';
import isString from './isString';
import isSymbol from './isSymbol';
import isBigInt from './isBigInt';
import isArray from './isArray';
import isObject from './isObject';
import isFunction from './isFunction';
import { Type } from './types';

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
