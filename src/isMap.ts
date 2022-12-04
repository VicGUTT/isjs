import instanceOf from './utils/instanceOf.js';

/**
 * Determines whether the given value is a Map.
 *
 * @example
 * ```js
 * isMap([]); // false
 * isMap(new Map); // true
 * ```
 */
export default function isMap(value: unknown): value is Map<unknown, unknown> {
    return instanceOf(value, Map);
}
