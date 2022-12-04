import type { Nil } from './types/index.js';
import isNullOrUndefined from './isNullOrUndefined.js';

/**
 * Determines whether the given value is `Nil` (`null` or `undefined`).
 *
 * @alias isNullOrUndefined This function is an alias of the `isNullOrUndefined` function.
 *
 * @example
 * ```js
 * isNil(123); // false
 * isNil(null); // true
 * isNil(undefined); // true
 * ```
 */
export default function isNil(value: unknown): value is Nil {
    return isNullOrUndefined(value);
}
