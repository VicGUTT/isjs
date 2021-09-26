import { Blank } from './types';
import isEmpty from './isEmpty';
import isString from './isString';
import isNumeric from './isNumeric';
import isBoolean from './isBoolean';
import isBigInt from './isBigInt';

/**
 * Determines whether the given value is "blank".
 *
 * A value is considered "blank" if:
 * - The value is null or undefined
 * - The value is NaN
 * - The value has a "length" property and it's value, a number, is "falsy"
 * - The value is a Map or a Set and it's size is "falsy"
 * - The value, when a string, and trimmed, is empty _(ex.: '   ')_
 * - The value, when an object, has no properties of it's own _(ex.: !Object.keys(value).length)_
 *
 * A value is NOT considered "blank" if:
 * - The value is numeric _(ex.: 0, -0, '0', 3.72, '3.72')_
 * - The value is a boolean _(ex.: false)_
 * - The value is a function
 * - The value is a bigInt _(ex.: 0n)_
 *
 * @example
 * ```js
 * isBlank('   hey '); // false
 * isBlank(0); // false
 * isBlank(false); // false
 * isBlank(() => {}); // false
 * isBlank(document.querySelectorAll('body')); // false
 * isBlank('    '); // true
 * isBlank(NaN); // true
 * isBlank([]); // true
 * isBlank({}); // true
 * isBlank(Object.create({})); // true
 * isBlank(Object.create(null)); // true
 * isBlank(Object.assign([], { a: 1, b: 2 })); // true
 * isBlank(new Map); // true
 * isBlank(new String); // true
 * isBlank(document.querySelectorAll('no-existent-element')); // true
 * ```
 */
export default function isBlank<T>(value: T): value is Blank<T> {
    if (isString(value)) {
        return value.trim() === '';
    }

    if (isNumeric(value)) {
        return false;
    }

    if (isBoolean(value)) {
        return false;
    }

    if (isBigInt(value)) {
        return false;
    }

    return isEmpty(value);
}
