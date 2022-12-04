import type { UnknownObject } from './types/index.js';
import instanceOf from './utils/instanceOf.js';

/**
 * Determines whether the given value is a WeakSet.
 *
 * @example
 * ```js
 * isWeakSet([]); // false
 * isWeakSet(new WeakSet); // true
 * ```
 */
export default function isWeakSet(value: unknown): value is WeakSet<UnknownObject> {
    return instanceOf(value, WeakSet);
}
