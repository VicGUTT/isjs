import type { Primitive } from './types/index.js';
import isBigInt from './isBigInt.js';
import isNull from './isNull.js';
import isSymbol from './isSymbol.js';
import isUndefined from './isUndefined.js';
import isBoolean from './isBoolean.js';
import isString from './isString.js';

/**
 * Determines whether the given value is a "primitive".
 *
 * A value is considered a "primitive" if it is equal to one of the following:
 * - null
 * - undefined
 * - boolean
 * - number _(including: number, NaN, Infinity)_
 * - string
 * - symbol
 * - bigint
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 *
 * @example
 * ```js
 * isPrimitive({}); // false
 * isPrimitive([]); // false
 * isPrimitive(new String); // false
 * isPrimitive(String()); // true
 * isPrimitive(null); // true
 * isPrimitive(false); // true
 * isPrimitive(0n); // true
 * ```
 */
export default function isPrimitive(value: unknown): value is Primitive {
    return (
        isNull(value) ||
        isUndefined(value) ||
        isBoolean(value) ||
        typeof value === 'number' || // Including : number, NaN, Infinity
        isString(value) ||
        isSymbol(value) ||
        isBigInt(value)
    );
}
