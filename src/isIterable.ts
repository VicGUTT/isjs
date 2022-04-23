import type { Iterable } from './types';

/**
 * Determines whether the given value is an "iterable".
 *
 * Iterable objects defines or customizes their iteration behavior, such as
 * what values are looped over in a `for...of` construct.
 * Some built-in types are [built-in iterables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#built-in_iterables) with a default iteration behavior,
 * such as `Array` or `Map`, while other types (such as `Object`) are not.
 *
 * In order to be iterable, an object must implement the `@@iterator` method,
 * meaning that the object (or one of the objects up its prototype chain) must
 * have a property with an `@@iterator` key which is available via the constant
 * `Symbol.iterator` _(ex.: {[Symbol.iterator]: function() {}})_.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols
 * @see https://javascript.info/iterable
 *
 * @example
 * ```js
 * isIterable(123); // false
 * isIterable([]); // true
 * isIterable({hey: 'hello', [Symbol.iterator]: function() {}}); // true
 * ```
 */
export default function isIterable<T>(value: unknown): value is Iterable<T> {
    // @ts-expect-error You're not the boss of me TS
    return typeof value?.[Symbol.iterator] === 'function';
}
