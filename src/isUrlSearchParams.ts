import getConstructor from './utils/getConstructor.js';

/**
 * Determines whether the given value is a URLSearchParams object.
 *
 * @example
 * ```js
 * isUrlSearchParams({}); // false
 * isUrlSearchParams(new URLSearchParams()); // true
 * ```
 */
export default function isUrlSearchParams(value: unknown): value is URLSearchParams {
    return getConstructor(value) === URLSearchParams;
}
