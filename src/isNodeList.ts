import type { UnknownConstructor } from './types/index.js';
import instanceOf from './utils/instanceOf.js';

/**
 * Determines whether the given value is a NodeList.
 *
 * @example
 * ```js
 * isNodeList([]); // false
 * isNodeList(document.querySelectorAll('body')); // true
 * ```
 */
export default function isNodeList(value: unknown): value is NodeList {
    return instanceOf(value, NodeList as unknown as UnknownConstructor);
}
