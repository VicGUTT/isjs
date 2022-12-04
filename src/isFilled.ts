import type { Filled } from './types/index.js';
import isBlank from './isBlank.js';

/**
 * Determines whether the given value is "filled".
 *
 * A value is considered "filled" if:
 * - The value is numeric _(ex.: 0, -0, '0', 3.72, '3.72')_
 * - The value is a boolean _(ex.: false)_
 * - The value is a function
 * - The value is a bigInt _(ex.: 0n)_
 *
 * A value is NOT considered "filled" if:
 * - The value is null or undefined
 * - The value is NaN
 * - The value has a "length" property and it's value, a number, is "falsy"
 * - The value has a "size" property and it's value, a number, is "falsy"
 * - The value, when a string, and trimmed, is empty _(ex.: '   ')_
 * - The value, when an object, has no properties of it's own _(ex.: !Object.keys(value).length)_
 *
 * _This function is the opposite of the `isBlank` function._
 *
 *
 * @example
 * ```js
 * isFilled('    '); // false
 * isFilled(NaN); // false
 * isFilled([]); // false
 * isFilled({}); // false
 * isFilled(Object.create({})); // false
 * isFilled(Object.create(null)); // false
 * isFilled(Object.assign([], { a: 1, b: 2 })); // false
 * isFilled(new Map); // false
 * isFilled(new String); // false
 * isFilled(document.querySelectorAll('no-existent-element')); // false
 * isFilled('   hey '); // true
 * isFilled(0); // true
 * isFilled(false); // true
 * isFilled(() => {}); // true
 * isFilled(document.querySelectorAll('body')); // true
 * ```
 */
export default function isFilled<T>(value: T): value is Filled<T> {
    return !isBlank(value);
}
