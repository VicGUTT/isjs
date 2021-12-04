/* eslint-disable @typescript-eslint/ban-types */

/*
 *--------------------------------------------------------------------------
 * Utility Types
 *--------------------------------------------------------------------------
 *
 * TypeScript provides several utility types to facilitate common type
 * transformations. These utilities are available globally.
 * Here we aim to complement those types.
 *
 * @see https://www.typescriptlang.org/docs/handbook/utility-types.html
 * @see https://github.com/piotrwitek/utility-types
 */

export type Falsy = false | 0 | -0 | 0n | '' | Nil | typeof NaN; // https://developer.mozilla.org/en-US/docs/Glossary/Falsy
export type Truthy<T> = Exclude<T, Falsy>; // https://developer.mozilla.org/en-US/docs/Glossary/Truthy

export type Empty<T> = Exclude<
    T,
    Truthy<T> | Function | UnknownObject | { readonly length: Truthy<T> } | { readonly size: Truthy<T> }
>;
export type Defined<T> = Exclude<T, undefined>;
export type NotEmpty<T> = Exclude<T, Empty<T>>;

export type Blank<T> = Exclude<T, 0 | '0' | false | NotEmpty<T>>;
export type Filled<T> = Exclude<T, Blank<T>>;

export type SuperType = 'nil' | 'number' | 'primitive' | 'derivative';
export type SubType =
    | 'null'
    | 'undefined'
    | 'bool'
    | 'nan'
    | 'infinity'
    | 'int'
    | 'float'
    | 'string'
    | 'symbol'
    | 'bigInt'
    | 'array'
    | 'object'
    | 'function';

export type Type = SuperType | SubType;
export type TypedAs = Exclude<Type, 'null' | 'undefined' | 'number' | 'primitive'>;

/*
 *--------------------------------------------------------------------------
 * General Types
 *--------------------------------------------------------------------------
 *
 * Complementing the default, "everyday", global TypeScript types.
 */

export type Nil = null | undefined;
export type Numeric = number | string;
// export type Func = () => void;
export type UnknownObject = Record<string | number | symbol, unknown>;
export type Primitive = null | undefined | boolean | number | string | symbol | bigint;
export type Derivative<T> = Exclude<T, Primitive>;
export type Lengthy<T extends {} = {}> = T & { length: number };
export type Sizey<T extends {} = {}> = T & { size: number };
export type Iterable<T extends {} = {}> = T & { [Symbol.iterator]: Object };

/*
 *--------------------------------------------------------------------------
 * Helper Types
 *--------------------------------------------------------------------------
 */

export type UnknownConstructor<T extends {} = {}> = new (...args: any[]) => T; // eslint-disable-line @typescript-eslint/no-explicit-any
export type UnknownConstructorFunction<T extends {} = {}> = (...args: any[]) => T; // eslint-disable-line @typescript-eslint/no-explicit-any
export type ConstructorLike<T = unknown> = { readonly prototype: T };
export type Constructor<T extends {} = {}> = ConstructorLike & (UnknownConstructor<T> | UnknownConstructorFunction<T>);

/* eslint-enable @typescript-eslint/ban-types */
