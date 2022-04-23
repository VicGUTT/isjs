import type { Falsy } from './types';

/**
 * Determines whether the given value is "falsy".
 *
 * A value is considered "falsy" if it is equal to one of the following:
 * - false
 * - 0
 * - -0
 * - 0n
 * - ''
 * - null
 * - undefined
 * - NaN
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 *
 * @example
 * ```js
 * isFalsy(1); // false
 * isFalsy(true); // false
 * isFalsy(0); // true
 * isFalsy(false); // true
 * ```
 */
export default function isFalsy(value: unknown): value is Falsy {
    return !value;
}
