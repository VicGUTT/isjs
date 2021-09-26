/*
 *--------------------------------------------------------------------------
 * Utility/Helper Types
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
    // eslint-disable-next-line @typescript-eslint/ban-types
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
export type Lengthy<T extends {} = {}> = T & { length: number }; // eslint-disable-line @typescript-eslint/ban-types
export type Sizey<T extends {} = {}> = T & { size: number }; // eslint-disable-line @typescript-eslint/ban-types
export type Iterable<T extends {} = {}> = T & { [Symbol.iterator]: Object }; // eslint-disable-line @typescript-eslint/ban-types

/*
 * ---------------------------------------------------------------------------------------------------------------
 */

// @see https://www.simonholywell.com/post/typescript-constructor-type.html

// export type Constructor<T extends {} = {}> = new (...args: any[]) => T;
// export type Constructor<T extends Object = Object> = new (...args: unknown[]) => T;
// export type Constructor<T extends Record<string, unknown> = Record<string, unknown>> = new (...args: unknown[]) => T;

// // @ts-expect-error "value" should be an object now and therefore have a "constructor" method
// export type Constructor<T extends {} = {}> = new (...args: unknown[]) => T;

export type ConstructorLike = { readonly prototype: unknown };
export type AnyConstructor =
    | ArrayConstructor
    | DateConstructor
    | NumberConstructor
    | ObjectConstructor
    | RegExpConstructor
    | StringConstructor
    | FunctionConstructor
    | BooleanConstructor
    | ErrorConstructor
    | ArrayBufferConstructor
    | DataViewConstructor
    | Int8ArrayConstructor
    | Uint8ArrayConstructor
    | Uint8ClampedArrayConstructor
    | Int16ArrayConstructor
    | Uint16ArrayConstructor
    | Int32ArrayConstructor
    | Uint32ArrayConstructor
    | Float32ArrayConstructor
    | Float64ArrayConstructor
    | SymbolConstructor
    | MapConstructor
    | WeakMapConstructor
    | SetConstructor
    | WeakSetConstructor
    | PromiseConstructor
    | BigIntConstructor;
export type UnknownConstructor = ConstructorLike & AnyConstructor;
// export type Constructor<T extends AnyConstructor> = new (...args: unknown[]) => T;
