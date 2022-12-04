import type { Defined } from './types/index.js';
import isUndefined from './isUndefined.js';

/**
 * Determines whether the given value is not `undefined`.
 *
 * _This function is the opposite of the `isUndefined` function._
 *
 * @example
 * ```js
 * isDefined(undefined); // false
 * isDefined(123); // true
 * isDefined(''); // true
 * ```
 */
export default function isDefined<T>(value: T): value is Defined<T> {
    return !isUndefined(value);
}
