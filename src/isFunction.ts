import getConstructor from './utils/getConstructor';

/**
 * Determines whether the given value is a function.
 *
 * @example
 * ```js
 * isFunction(123); // false
 * isFunction(new class Hello {}); // false
 * isFunction(() => {}); // true
 * isFunction(function() {}); // true
 * isFunction(function hello() {}); // true
 * isFunction(class Hello {}); // true
 * isFunction(new Function); // true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isFunction(value: unknown): value is Function {
    return getConstructor(value) === Function;
}
