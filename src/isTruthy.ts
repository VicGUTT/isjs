import { Truthy } from './types';

/**
 * Determines whether the given value is "truthy".
 *
 * A value is considered "truthy" if it is NOT equal to one of the following:
 * - false
 * - 0
 * - -0
 * - 0n
 * - ''
 * - null
 * - undefined
 * - NaN
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 *
 * @example
 * ```js
 * isTruthy(0); // false
 * isTruthy(false); // false
 * isTruthy(1); // true
 * isTruthy(true); // true
 * ```
 */
export default function isTruthy<T>(value: T): value is Truthy<T> {
    return !!value;
}
