import getConstructor from './utils/getConstructor';

/**
 * Determines whether the given value is a bigint.
 *
 * @example
 * ```js
 * isBigInt(123); // false
 * isBigInt(0n); // true
 * isBigInt(10n); // true
 * isBigInt(BigInt(10)); // true
 * ```
 */
export default function isBigInt(value: unknown): value is bigint {
    return getConstructor(value) === BigInt;
}
