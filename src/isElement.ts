import { UnknownConstructor } from './types';
import instanceOf from './utils/instanceOf';

/**
 * Determines whether the given value is an Element.
 *
 * Element is the most general base class from which all objects in a Document inherit.
 * It only has methods and properties common to all kinds of elements.
 * More specific classes inherit from Element.
 *
 * @example
 * ```js
 * isElement({}); // false
 * isElement(Document); // false
 * isElement(Window); // false
 * isElement(document.getRootNode()); // false
 * isElement(document.body); // true
 * isElement(document.querySelector('html')); // true
 * isElement(document.createElement('img')); // true
 * ```
 */
export default function isElement(value: unknown): value is Element {
    return instanceOf(value, Element as unknown as UnknownConstructor);
}
