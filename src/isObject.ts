import type { UnknownObject } from './types';

/**
 * Determines whether the given value is an "object literal".
 *
 * A value is considered an "object literal" if it is an object
 * created by the `Object` constructor or one with a `[[Prototype]]`
 * of `null` or one where it's prototype's constructor is `Object`.
 *
 * This function is similair but NOT identical to Lodash's `isPlainObject`.
 * The two functions differ in whether or not they choose to identify objects
 * created using an existing object as their prototype instead of the base `Object`
 * as "object literals" _(ex.: const myObject = Object.create({}))_.
 *
 * Lodash's `isPlainObject` doesn't, ours do, as long as the created object's prototype's
 * constructor is `Object` _(ex.: myObject.prototype.constructor === Object)_.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
 *
 * @example
 * ```js
 * isObject(''); // false
 * isObject([]); // false
 * isObject(Math); // false
 * isObject(Object); // false
 * isObject(class Yolo {}); // false
 * isObject(new (class Yolo {})); // false
 * isObject({}); // true
 * isObject(new Object); // true
 * isObject(Object.create({ a: 1, b: 2 })); // true (lodash.isPlainObject --> false)
 * isObject(Object.create(null)); // true
 * ```
 */
export default function isObject(value: unknown): value is UnknownObject {
    /**
     * Note:
     * `return getConstructor(value) === Object` works great for most cases
     * but fails in the following situations:
     * - isObject(Object.create(null)); // false
     * - isObject(Math); // true
     */
    // return getConstructor(value) === Object;

    // Filter out non "objects" + build-in objects like `Math`
    if (Object.prototype.toString.call(value) !== '[object Object]') {
        return false;
    }

    const proto = Object.getPrototypeOf(value);

    // Any object literal should pass here (but would exclude objects like `Object.create({})`)
    if (proto === Object.prototype) {
        return true;
    }

    // Ex.: Object.create(null)
    if (proto === null) {
        return true;
    }

    // Including objects like `Object.create({})`
    return proto.constructor === Object;
}
