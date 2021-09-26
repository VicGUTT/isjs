import getConstructor from './utils/getConstructor';

/**
 * Determines whether the given value is a boolean.
 *
 * This function is able to differenciate between "boolean literals" and "boolean instances".
 * - By "boolean literals" is meant booleans created using `true` or `false`.
 * - By "boolean instances" is meant booleans created using the `Boolean` constructor (ex.: new Boolean(true))
 *
 * @example
 * ```js
 * isBoolean(1); // false
 * isBoolean(new Boolean(true)); // false
 * isBoolean(true); // true
 * isBoolean(false); // true
 * isBoolean(Boolean(true)); // true
 *
 * isBoolean(1, true); // false
 * isBoolean(new Boolean(true), true); // true
 * isBoolean(true, true); // true
 * isBoolean(false, true); // true
 * isBoolean(Boolean(true), true); // true
 * ```
 */
export default function isBoolean(value: unknown, allowConstructorInstances = false): value is boolean {
    if (allowConstructorInstances) {
        return getConstructor(value) === Boolean;
    }

    return value === true || value === false;
}
