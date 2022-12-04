import instanceOf from './utils/instanceOf.js';
import isFunction from './isFunction.js';

/**
 * Determines whether the given value is a Promise.
 *
 * @example
 * ```js
 * isPromise([]); // false
 * isPromise(new Promise(() => {})); // true
 * ```
 */
export default function isPromise(value: unknown): value is Promise<unknown> {
    return instanceOf(value, Promise) && isFunction((value as Promise<unknown>).then);
}
