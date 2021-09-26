import { Lengthy } from './types';

/**
 * Determines whether the given value is a "lengthy".
 *
 * A value is considered "lengthy" if it has a `length`
 * property that returns a number.
 *
 * @example
 * ```js
 * isLengthy(123); // false
 * isLengthy({length: '0'}); // false
 * isLengthy(''); // true
 * isLengthy([]); // true
 * isLengthy({length: 0}); // true
 * ```
 */
export default function isLengthy<T>(value: unknown): value is Lengthy<T> {
    try {
        // @ts-expect-error C'mon, it's in a try/catch block
        return typeof value.length === 'number';
    } catch (error) {
        return false;
    }
}
