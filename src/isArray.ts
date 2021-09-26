/**
 * Determines whether the given value is an array.
 *
 * @example
 * ```js
 * isArray(123); // false
 * isArray([123]); // true
 * isArray(Array(123)); // true
 * isArray(new Array(123)); // true
 * ```
 */
export default function isArray(value: unknown): value is Array<unknown> {
    return Array.isArray(value);
}
