import { ConstructorLike } from './types';
import getConstructor from './utils/getConstructor';

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
