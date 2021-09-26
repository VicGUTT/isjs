import instanceOf from './utils/instanceOf';

/**
 * Determines whether the given value is a Set.
 *
 * @example
 * ```js
 * isSet([]); // false
 * isSet(new Set); // true
 * ```
 */
export default function isSet(value: unknown): value is Set<unknown> {
    return instanceOf(value, Set);
}
