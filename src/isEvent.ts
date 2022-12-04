import type { UnknownConstructor } from './types/index.js';
import instanceOf from './utils/instanceOf.js';

/**
 * Determines whether the given value is an event.
 *
 * @example
 * ```js
 * isEvent(new Event('yo')); // true
 * isEvent(new CustomEvent('yo')); // true
 * ```
 */
export default function isEvent(value: unknown): value is Event {
    return instanceOf(value, Event as unknown as UnknownConstructor);
}
