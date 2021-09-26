import { NotEmpty } from './types';
import isEmpty from './isEmpty';

/**
 * Determines whether the given value is not "empty".
 *
 * A value is considered "empty" if:
 * - The value is "falsy" _(false, 0, -0, 0n, '', null, undefined, NaN)_
 * - The value has a "length" property and it's value, a number, is "falsy" _(functions excluded)_
 * - The value has a "size" property and it's value, a number, is "falsy"
 * - The value, when an object, has no properties of it's own _(ex.: !Object.keys(value).length)_
 *
 * _This function is the opposite of the `isEmpty` function._
 *
 * @example
 * ```js
 * isNotEmpty(false); // false
 * isNotEmpty(''); // false
 * isNotEmpty(0); // false
 * isNotEmpty([]); // false
 * isNotEmpty({}); // false
 * isNotEmpty(Object.create({})); // false
 * isNotEmpty(Object.create(null)); // false
 * isNotEmpty(Object.assign([], { a: 1, b: 2 })); // false
 * isNotEmpty(new Map); // false
 * isNotEmpty(new String); // false
 * isNotEmpty(document.querySelectorAll('non-existent-element')); // false
 * isNotEmpty('    '); // true
 * isNotEmpty(() => {}); // true
 * isNotEmpty(document.querySelectorAll('body')); // true
 * isNotEmpty(true); // true
 * ```
 */
export default function isNotEmpty<T>(value: T): value is NotEmpty<T> {
    return !isEmpty<T>(value);
}
