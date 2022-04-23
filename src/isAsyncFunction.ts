import { UnknownAsyncFunction } from './types';
import getConstructor from './utils/getConstructor';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const AsyncFunction = getConstructor(async () => {});

/**
 * Determines whether the given value is an async function.
 *
 * @example
 * ```js
 * isAsyncFunction(123); // false
 * isAsyncFunction(new class Hello {}); // false
 * isAsyncFunction(() => {}); // false
 * isAsyncFunction(function() {}); // false
 * isAsyncFunction(function hello() {}); // false
 * isAsyncFunction(class Hello {}); // false
 * isAsyncFunction(new Function); // false
 * isFunction(async function hello() {}); // true
 * ```
 */
export default function isAsyncFunction(value: unknown): value is UnknownAsyncFunction {
    return getConstructor(value) === AsyncFunction;
}
