import isNumber from './isNumber.js';

/**
 * Determines whether the given value is a float.
 *
 * @example
 * ```js
 * isFloat(123); // false
 * isFloat(123.0); // false
 * isFloat(123.123); // true
 * ```
 */
export default function isFloat(value: unknown): value is number {
    return isNumber(value) && Number.isFinite(value) && !Number.isInteger(value);
}
