import type { UnknownConstructor } from '../types/index.js';

export default function instanceOf(value: unknown, constructor: UnknownConstructor): boolean {
    return Boolean(value && constructor && value instanceof constructor);
}
