// import { Constructor } from '../types';

// export default function getConstructor(value: unknown): Constructor | null {

import { UnknownConstructor } from '../types';

export default function getConstructor(value: unknown): UnknownConstructor | null {
    return value !== null && typeof value !== 'undefined' ? Object.getPrototypeOf(value)?.constructor ?? null : null;
}
