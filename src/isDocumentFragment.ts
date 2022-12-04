import instanceOf from './utils/instanceOf.js';

/**
 * Determines whether the given value is a `DocumentFragment`.
 *
 * @example
 * ```js
 * isDocumentFragment({}); // false
 * isDocumentFragment(Document); // false
 * isDocumentFragment(Window); // false
 * isDocumentFragment(document.getRootNode()); // false
 * isDocumentFragment(document.body); // false
 * isDocumentFragment(document.querySelector('html')); // false
 * isDocumentFragment(document.createElement('img')); // false
 * isDocumentFragment(new DocumentFragment()); // true
 * isDocumentFragment(document.createDocumentFragment()); // true
 * ```
 */
export default function isDocumentFragment(value: unknown): value is DocumentFragment {
    return instanceOf(value, DocumentFragment);
}
