import type { SubType, SuperType, Type } from '../types/index.js';

export const SUPER_TYPES: SuperType[] = ['nil', 'number', 'derivative', 'primitive'];

export const SUB_TYPES: SubType[] = [
    'null',
    'undefined',
    'bool',
    'nan',
    'infinity',
    'int',
    'float',
    'string',
    'symbol',
    'bigInt',
    'array',
    'object',
    'function',
];

const TYPES: Type[] = [...SUPER_TYPES, ...SUB_TYPES];

export default TYPES;
