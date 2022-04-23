import type { Nil } from './types';
import isNull from './isNull';
import isUndefined from './isUndefined';

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
