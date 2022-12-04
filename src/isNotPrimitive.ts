import type { Derivative } from './types/index.js';
import isPrimitive from './isPrimitive.js';

/**
 * Determines whether the given value is not a "primitive".
 *
 * A value is considered a "primitive" if it is equal to one of the following:
 * - null
 * - undefined
 * - boolean
 * - number
 * - string
 * - symbol
 * - bigint
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Primitive
 *
 * @example
 * ```js
 * isNotPrimitive(String()); // false
 * isNotPrimitive(null); // false
 * isNotPrimitive(false); // false
 * isNotPrimitive(0n); // false
 * isNotPrimitive({}); // true
 * isNotPrimitive([]); // true
 * isNotPrimitive(new String); // true
 * ```
 */
export default function isNotPrimitive<T>(value: T): value is Derivative<T> {
    return !isPrimitive(value);
}
