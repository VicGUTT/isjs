import type { Nil } from './types/index.js';
import isNull from './isNull.js';
import isUndefined from './isUndefined.js';

/**
 * Determines whether the given value is `null` or `undefined`.
 *
 * @example
 * ```js
 * isNullOrUndefined(123); // false
 * isNullOrUndefined(null); // true
 * isNullOrUndefined(undefined); // true
 * ```
 */
export default function isNullOrUndefined(value: unknown): value is Nil {
    return isNull(value) || isUndefined(value);
}
