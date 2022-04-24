import instanceOf from './utils/instanceOf';

/**
 * Determines whether the given value is a ShadowRoot.
 *
 * @example
 * ```js
 * isShadowRoot({}); // false
 * isShadowRoot(Document); // false
 * isShadowRoot(Window); // false
 * isShadowRoot(document.getRootNode()); // false
 * isShadowRoot(document.body); // false
 * isShadowRoot(document.querySelector('html')); // false
 * isShadowRoot(document.createElement('img')); // false
 * isShadowRoot(document.createElement('span').attachShadow({ mode: 'open' })); // true
 * ```
 */
export default function isShadowRoot(value: unknown): value is ShadowRoot {
    return instanceOf(value, ShadowRoot);
}
