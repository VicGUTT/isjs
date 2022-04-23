import type { UnknownConstructor } from '../types';

export default function instanceOf(value: unknown, constructor: UnknownConstructor): boolean {
    return Boolean(value && constructor && value instanceof constructor);
}
