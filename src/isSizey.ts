import { Sizey } from './types';

/**
 * Determines whether the given value is "sizey".
 *
 * A value is considered "sizey" if it has a `size`
 * property that returns a number.
 *
 * @example
 * ```js
 * isSizey(123); // false
 * isSizey({size: '0'}); // false
 * isSizey(new Map); // true
 * isSizey({size: 0}); // true
 * ```
 */

export default function isSizey<T>(value: unknown): value is Sizey<T> {
    try {
        // @ts-expect-error C'mon, it's in a try/catch block
        return typeof value.size === 'number';
    } catch (error) {
        return false;
    }
}
