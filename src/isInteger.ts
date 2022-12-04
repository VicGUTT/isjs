import isNumber from './isNumber.js';

/**
 * Determines whether the given value is an integer.
 *
 * @example
 * ```js
 * isInteger(123.123); // false
 * isInteger(123.0); // true
 * isInteger(123); // true
 * ```
 */
export default function isInteger(value: unknown): value is number {
    return isNumber(value) && Number.isInteger(value);
}
