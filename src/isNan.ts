/**
 * Determines whether the given value is `NaN`.
 *
 * @example
 * ```js
 * isNan(NaN); // true
 * ```
 */
export default function isNan(value: unknown): value is typeof NaN {
    return Number.isNaN(value);
}
