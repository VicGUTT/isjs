import type { UnknownObject } from './types/index.js';
import instanceOf from './utils/instanceOf.js';

/**
 * Determines whether the given value is a WeakMap.
 *
 * @example
 * ```js
 * isWeakMap([]); // false
 * isWeakMap(new WeakMap); // true
 * ```
 */
export default function isWeakMap(value: unknown): value is WeakMap<UnknownObject, unknown> {
    return instanceOf(value, WeakMap);
}
