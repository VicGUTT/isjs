import isFunction from './isFunction';

/**
 * Determines whether the given value is a class.
 * This function is able to distinguish between a function and a class.
 *
 * @example
 * ```js
 * isClass(123); // false
 * isClass(() => {}); // false
 * isClass(function() {}); // false
 * isClass(function hello() {}); // false
 * isClass(new Function); // false
 * isClass(new class Hello {}); // false
 * isClass(class Hello {}); // true
 * ```
 */
// @see https://github.com/stdlib-js/assert-is-class/blob/5ffc1a9bebe2db3d3ca152ed2386e643f4b27959/lib/main.js#L54
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isClass(value: unknown): value is Function {
    return isFunction(value) && Function.prototype.toString.call(value).includes('class ');
}
