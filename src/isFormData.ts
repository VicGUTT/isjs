import getConstructor from './utils/getConstructor.js';

/**
 * Determines whether the given value is a FormData object.
 *
 * @example
 * ```js
 * isFormData({}); // false
 * isFormData(new FormData()); // true
 * ```
 */
export default function isFormData(value: unknown): value is FormData {
    return getConstructor(value) === FormData;
}
