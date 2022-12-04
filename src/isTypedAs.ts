import type { TypedAs } from './types/index.js';
import isNil from './isNil.js';
import isBoolean from './isBoolean.js';
import isString from './isString.js';
import isSymbol from './isSymbol.js';
import isBigInt from './isBigInt.js';
import isArray from './isArray.js';
import isObject from './isObject.js';
import isInt from './isInt.js';
import isFloat from './isFloat.js';
import isFunction from './isFunction.js';
import isNan from './isNan.js';
import isInfinity from './isInfinity.js';
import isDerivative from './isDerivative.js';
import IsBaseException from './Exceptions/IsBaseException.js';

/**
 * Retrieves a given value's type.
 *
 * The returned type can only be one of the following:
 * - nil
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
 * - derivative
 *
 * @example
 * ```js
 * isTypedAs(null); // nil
 * isTypedAs(undefined); // nil
 * isTypedAs(true); // bool
 * isTypedAs(NaN); // nan
 * isTypedAs(Infinity); // infinity
 * isTypedAs(123); // int
 * isTypedAs(123.10); // float
 * isTypedAs(Symbol(123)); // symbol
 * isTypedAs(123n); // bigInt
 * isTypedAs([]); // array
 * isTypedAs(() => {}); // function
 * isTypedAs(class Hello {}); // function
 * isTypedAs(new Function); // function
 * isTypedAs(Math); // derivative
 * isTypedAs(new Map); // derivative
 * isTypedAs(new (class Hello {})); // derivative
 * ```
 */
export default function isTypedAs(value: unknown): TypedAs {
    const types: { [key in TypedAs]: (value: unknown) => boolean } = {
        nil: isNil,
        bool: isBoolean,
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
        derivative: isDerivative,
    };

    for (const [type, test] of Object.entries(types)) {
        if (test(value)) {
            return type as TypedAs;
        }
    }

    /**
     * We should never get here.
     */
    /* c8 ignore start */
    throw IsBaseException.unknown();
    /* c8 ignore end */
}
