import type { Empty } from './types/index.js';
import isFunction from './isFunction.js';
import isObject from './isObject.js';
import isLengthy from './isLengthy.js';
import isSet from './isSet.js';
import isMap from './isMap.js';

/**
 * Determines whether the given value is "empty".
 *
 * A value is considered "empty" if:
 * - The value is "falsy" _(false, 0, -0, 0n, '', null, undefined, NaN)_
 * - The value has a "length" property and it's value, a number, is "falsy" _(functions excluded)_
 * - The value is a Map or a Set and it's size is "falsy"
 * - The value, when an object, has no properties of it's own _(ex.: !Object.keys(value).length)_
 *
 * @example
 * ```js
 * isEmpty('    '); // false
 * isEmpty(() => {}); // false
 * isEmpty(document.querySelectorAll('body')); // false
 * isEmpty(true); // false
 * isEmpty(false); // true
 * isEmpty(''); // true
 * isEmpty(0); // true
 * isEmpty([]); // true
 * isEmpty({}); // true
 * isEmpty(Object.create({})); // true
 * isEmpty(Object.create(null)); // true
 * isEmpty(Object.assign([], { a: 1, b: 2 })); // true
 * isEmpty(new Map); // true
 * isEmpty(new String); // true
 * isEmpty(document.querySelectorAll('non-existent-element')); // true
 * ```
 */
export default function isEmpty<T>(value: T): value is Empty<T> {
    // string, array, nodeList, ...
    if (isLengthy(value) && !isFunction(value)) {
        return !value.length;
    }

    // // Set, Map, ...
    // if (isSizey(value)) { --> some HTML elements like the input element can also have a "size" property but for completely diffferent purposes
    if (isSet(value) || isMap(value)) {
        return !value.size;
    }

    if (isObject(value)) {
        return !Object.keys(value).length;
    }

    return !value;
}
