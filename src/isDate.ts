import getConstructor from './utils/getConstructor';

/**
 * Determines whether the given value is a Date object.
 *
 * @example
 * ```js
 * isDate(Date()); // false
 * isDate(new Date()); // true
 * ```
 */
export default function isDate(value: unknown): value is Date {
    return getConstructor(value) === Date;
}
