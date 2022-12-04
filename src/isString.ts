import getConstructor from './utils/getConstructor.js';

/**
 * Determines whether the given value is a string.
 *
 * This function is able to differenciate between "string literals" and "string instances".
 * - By "string literals" is meant strings created using `''`, `""`, `` ` ` ``, or `String()`.
 * - By "string instances" is meant strings created using the `String` constructor (ex.: new String('hey'))
 *
 * @example
 * ```js
 * isString(1); // false
 * isString(new String('hey')); // false
 * isString('hey'); // true
 *
 * isString(1, true); // false
 * isString(new String('hey'), true); // true
 * isString('hey', true); // true
 * ```
 */
export default function isString(value: unknown, allowConstructorInstances = false): value is string {
    const test = getConstructor(value) === String;

    if (allowConstructorInstances) {
        return test;
    }

    return test && typeof value !== 'object';
}
