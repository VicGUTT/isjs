import getConstructor from './utils/getConstructor.js';

/**
 * Determines whether the given value is a Symbol.
 *
 * @example
 * ```js
 * isSymbol(123); // false
 * isSymbol(Symbol(123)); // true
 * ```
 */
export default function isSymbol(value: unknown): value is symbol {
    return getConstructor(value) === Symbol;
}
