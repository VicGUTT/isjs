import type { ConstructorLike } from './types/index.js';
import getConstructor from './utils/getConstructor.js';

/**
 * Determines whether the given value is a Text.
 *
 * @example
 * ```js
 * isTextNode([]); // false
 * isTextNode(document.createTextNode('')); // true
 * ```
 */
export default function isTextNode(value: unknown): value is Text {
    return getConstructor(value) === (Text as ConstructorLike);
}
