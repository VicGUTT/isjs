import isBoolean from './isBoolean.js';

/**
 * Determines whether the given value is a boolean.
 *
 * This function is able to differenciate between "boolean literals" and "boolean instances".
 * - By "boolean literals" is meant booleans created using `true` or `false`.
 * - By "boolean instances" is meant booleans created using the `Boolean` constructor (ex.: new Boolean(true))
 *
 * @alias isBoolean This function is an alias of the `isBoolean` function.
 *
 * @example
 * ```js
 * isBool(1); // false
 * isBool(new Boolean(true)); // false
 * isBool(true); // true
 * isBool(false); // true
 * isBool(Boolean(true)); // true
 *
 * isBool(1, true); // false
 * isBool(new Boolean(true), true); // true
 * isBool(true, true); // true
 * isBool(false, true); // true
 * isBool(Boolean(true), true); // true
 * ```
 */
const isBool = isBoolean;

export default isBool;
