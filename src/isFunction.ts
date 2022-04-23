import { UnknownFunction } from './types';

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
 * isFunction(async function hello() {}); // true
 * isFunction(class Hello {}); // true
 * isFunction(new Function); // true
 * ```
 */
export default function isFunction(value: unknown): value is UnknownFunction {
    return typeof value === 'function';
}
