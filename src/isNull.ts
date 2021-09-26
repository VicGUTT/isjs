/**
 * Determines whether the given value is `null`.
 *
 * @example
 * ```js
 * isNull(123); // false
 * isNull(''); // false
 * isNull(null); // true
 * ```
 */
export default function isNull(value: unknown): value is null {
    return value === null;
}
