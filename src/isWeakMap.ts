import { UnknownObject } from './types';
import instanceOf from './utils/instanceOf';

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
