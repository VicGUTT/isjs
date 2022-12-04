import type { Derivative } from './types/index.js';
import isNotPrimitive from './isNotPrimitive.js';

/**
 * Determines whether the given value is a "derivative".
 *
 * A value is considered a "derivative" _(a made up word by the way, suggestions welcomed)_
 * if it is NOT a primitive _(null, undefined, boolean, number, string, symbol, bigint)_.
 * Basically an Object in the general JavaScript sense of the word "object".
 *
 * This function should behave exactly as Lodash' `isObject` function.
 *
 * _This function is an alias of the `isNotPrimitive` function._
 *
 * @example
 * ```js
 * isDerivative(''); // false
 * isDerivative(String()); // false
 * isDerivative(new String); // true
 * isDerivative(new Map); // true
 * isDerivative([]); // true
 * isDerivative({}); // true
 * ```
 */
export default function isDerivative<T>(value: T): value is Derivative<T> {
    return isNotPrimitive(value);
}

/**
 * Possible function names :
 *    - jsObject : as in JS' general definition of an Object
 *    - langObject : as in "the language type of Object" (basically same as above)
 *    - reference : as in "opposite of primitive" and "stuff passed by reference"
 *    - entity : as in "thing" (definition : being or existence, especially when considered as distinct, independent, or self-contained)
 *    - thing (synonyme of "object")
 *    - derivative : as in "derived from something" and that something being "value.constructor === Object"
 *                   I also like the fact that it ends with "tive" like in "primitive" and might suggest a correlation between the two
 *
 * Maybe create aliases ? Like "derivative" (or whatever) being an alias of "entity" (or whatever) ?
 */
