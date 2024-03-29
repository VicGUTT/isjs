import type { AsyncFunction } from './types/index.js';
import getConstructor from './utils/getConstructor.js';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const AsyncFunctionConstructor = getConstructor(async () => {});

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
 * isAsyncFunction(async function hello() {}); // true
 * ```
 */
export default function isAsyncFunction(value: unknown): value is AsyncFunction {
    return getConstructor(value) === AsyncFunctionConstructor;
}
