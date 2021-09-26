/**
 * Determines whether the given value is `Infinity`.
 *
 * @example
 * ```js
 * isInfinity(Infinity); // true
 * ```
 */
export default function isInfinity(value: unknown): value is typeof Infinity {
    // return isNumber(value) && !Number.isFinite(value); // -> fails with stuff like `new Number(0)` so we'd need to check if `value` is not an onject
    return value === Infinity;
}
