import type { Constructor } from '../types/index.js';

export default function getConstructor<T>(value: unknown): Constructor<T> | null {
    return value !== null && typeof value !== 'undefined' ? Object.getPrototypeOf(value)?.constructor ?? null : null;
}
