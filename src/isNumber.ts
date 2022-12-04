import getConstructor from './utils/getConstructor.js';

/**
 * Determines whether the given value is a number.
 * Including `Infinity` but excluding `NaN`.
 *
 * This function is able to differenciate between "number literals" and "number instances".
 * - By "number literals" is meant numbers created when writing a number directly, or with `Number()`.
 * - By "number instances" is meant numbers created using the `Number` constructor (ex.: new Number(123))
 *
 * @example
 * ```js
 * isNumber('hey'); // false
 * isNumber(new Number(123)); // false
 * isNumber(123); // true
 *
 * isNumber('hey', true); // false
 * isNumber(new Number(123), true); // true
 * isNumber(123, true); // true
 * ```
 */
export default function isNumber(value: unknown, allowConstructorInstances = false): value is number {
    const test = getConstructor(value) === Number;
    const isObject = typeof value === 'object';

    if (allowConstructorInstances) {
        return isObject ? test : test && !Number.isNaN(value);
    }

    return test && !isObject && !Number.isNaN(value);
}
