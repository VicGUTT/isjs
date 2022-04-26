import getConstructor from './utils/getConstructor';

/**
 * Determines whether the given value is a sync function.
 *
 * @example
 * ```js
 * isSyncFunction(123); // false
 * isSyncFunction(new class Hello {}); // false
 * isSyncFunction(async function hello() {}); // false
 * isSyncFunction(() => {}); // true
 * isSyncFunction(function() {}); // true
 * isSyncFunction(function hello() {}); // true
 * isSyncFunction(class Hello {}); // true
 * isSyncFunction(new Function); // true
 * ```
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export default function isSyncFunction(value: unknown): value is Function {
    return getConstructor(value) === Function;
}
