/**
 * Determines whether the given value is `undefined`.
 *
 * @example
 * ```js
 * isUndefined(123); // false
 * isUndefined(''); // false
 * isUndefined(undefined); // true
 * ```
 */
export default function isUndefined(value: unknown): value is undefined {
    return typeof value === 'undefined';
}
