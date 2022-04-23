import type { Numeric } from './types';
import isBigInt from './isBigInt';
import isSymbol from './isSymbol';

/**
 * Determines whether the given value is a number or a "numeric string".
 *
 * A string is considered numeric if it can be interpreted as / coerced to
 * a number (as an integer or a float).
 *
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion
 *
 * @example
 * ```js
 * isNumeric('11 23'); // false
 * isNumeric('hey'); // false
 * isNumeric(true); // false
 * isNumeric(1); // true
 * isNumeric(0); // true
 * isNumeric(11.23); // true
 * isNumeric('1'); // true
 * isNumeric('0'); // true
 * isNumeric('11.23'); // true
 * ```
 */
export default function isNumeric(value: unknown): value is Numeric {
    return !isSymbol(value) && !isBigInt(value) && !isNaN(_parseFloat(value)) && isFinite(value as number);
}

/*
 * Passing in values like `Object.create(null)`
 * causes `parseFloat` to throw `TypeError: Cannot convert object to primitive value`.
 */
function _parseFloat(value: unknown): number {
    try {
        return parseFloat(value as string);
    } catch (error) {
        return NaN;
    }
}
