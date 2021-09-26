import { Defined } from './types';
import isUndefined from './isUndefined';

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
