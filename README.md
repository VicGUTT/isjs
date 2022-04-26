# A set of JavaScript type checking helpers

Unfortunately, JavaScript does not provide convenient methods or helper functions to check a value's type. The mechanisms in place that could be a de facto way of doing it can have misleading results and are full of caveats to be aware of. Therefore having a set of type checking utility functions is left to userland implementations.

The functions provided by this library aims to type check values in a way I personally find intuitive and _"caveat safe"_, coming from a PHP and Laravel set of type checking helpers.

Which means some functions may behave differently than that of other libraries like Lodash etc... .

Here's a quick example:

```js
import is from '@vicgutt/isjs';
// or
import isArray from '@vicgutt/isjs/isArray';

is.array(123); // false
is.array([123]); // true
// or
isArray(123); // false
isArray([123]); // true
```

## Installation

Install the package via NPM _(or yarn)_:

```bash
npm i @vicgutt/isjs
```

```bash
yarn add @vicgutt/isjs
```

Then you may chose to import each individual functions separately _(`import isFoo from '@vicgutt/isjs/isFoo'`)_ or import an object containing all available functions _(`import is from '@vicgutt/isjs'`)_;

**Note**: This library is very "future facing" in the code that is distributed _(dist folder)_, meaning it requires at least Node16+ and ES2020/ES2021 support from your JS compiler/bundler or browser.

**Note bis**: Check out the [pro tips](#pro-tips) bellow.

## Constants

A couple helper constants are provided by the library.

### • **is.VERSION / VERSION**

Retrieves the current library's version.

```js
import is from '@vicgutt/isjs';
// or
import VERSION from '@vicgutt/isjs/constants/VERSION';

is.VERSION; // 'x.x.x'
// or
VERSION; // 'x.x.x'
```

### • **is.SUPER_TYPES / SUPER_TYPES**

Retrieves all "super types", that is, types that are composed of other smaller types.

Thoses types are:

-   nil _(null & undefined)_
-   number _(int & float)_
-   primitive _(null, undefined, boolean, number, string, symbol, bigint)_
-   derivative _(anything that is not a primitive)_

```js
import is from '@vicgutt/isjs';
// or
import { SUPER_TYPES } from '@vicgutt/isjs/constants/TYPES';

is.SUPER_TYPES; // [...]
// or
SUPER_TYPES; // [...]
```

### • **is.SUB_TYPES / SUB_TYPES**

Retrieves all "sub types", that is, types that are NOT composed of other smaller types.

Thoses types are:

-   null
-   undefined
-   bool
-   nan
-   infinity
-   int
-   float
-   string
-   symbol
-   bigInt
-   array
-   object
-   function

```js
import is from '@vicgutt/isjs';
// or
import { SUB_TYPES } from '@vicgutt/isjs/constants/TYPES';

is.SUB_TYPES; // [...]
// or
SUB_TYPES; // [...]
```

### • **is.TYPES / TYPES**

Retrieves all "types" (sub + super types).

```js
import is from '@vicgutt/isjs';
// or
import TYPES from '@vicgutt/isjs/constants/TYPES';

is.TYPES; // [...]
// or
TYPES; // [...]
```

## Available functions

<!-- {{ CONTENT }} -->

### • **is.array / isArray** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isArray.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isArray.test.ts))_

Determines whether the given value is an array.

```js
isArray(123); // false
isArray([123]); // true
isArray(Array(123)); // true
isArray(new Array(123)); // true
```

### • **is.asyncFunction / isAsyncFunction** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isAsyncFunction.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isAsyncFunction.test.ts))_

Determines whether the given value is an async function.

```js
isAsyncFunction(123); // false
isAsyncFunction(new (class Hello {})()); // false
isAsyncFunction(() => {}); // false
isAsyncFunction(function () {}); // false
isAsyncFunction(function hello() {}); // false
isAsyncFunction(class Hello {}); // false
isAsyncFunction(new Function()); // false
isAsyncFunction(async function hello() {}); // true
```

### • **is.bigInt / isBigInt** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isBigInt.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isBigInt.test.ts))_

Determines whether the given value is a bigint.

```js
isBigInt(123); // false
isBigInt(0n); // true
isBigInt(10n); // true
isBigInt(BigInt(10)); // true
```

### • **is.blank / isBlank** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isBlank.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isBlank.test.ts))_

Determines whether the given value is "blank".

A value is considered "blank" if:

-   The value is null or undefined
-   The value is NaN
-   The value has a "length" property and it's value, a number, is "falsy"
-   The value is a Map or a Set and it's size is "falsy"
-   The value, when a string, and trimmed, is empty _(ex.: ' ')_
-   The value, when an object, has no properties of it's own _(ex.: !Object.keys(value).length)_

A value is NOT considered "blank" if:

-   The value is numeric _(ex.: 0, -0, '0', 3.72, '3.72')_
-   The value is a boolean _(ex.: false)_
-   The value is a function
-   The value is a bigInt _(ex.: 0n)_

```js
isBlank('   hey '); // false
isBlank(0); // false
isBlank(false); // false
isBlank(() => {}); // false
isBlank(document.querySelectorAll('body')); // false
isBlank('    '); // true
isBlank(NaN); // true
isBlank([]); // true
isBlank({}); // true
isBlank(Object.create({})); // true
isBlank(Object.create(null)); // true
isBlank(Object.assign([], { a: 1, b: 2 })); // true
isBlank(new Map()); // true
isBlank(new String()); // true
isBlank(document.querySelectorAll('no-existent-element')); // true
```

### • **is.bool / isBool** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isBool.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isBool.test.ts))_

This function is an alias of the [`isBoolean`](#-isBoolean--isBoolean-source--tests) function.

```js
isBool(1); // false
isBool(new Boolean(true)); // false
isBool(true); // true
isBool(false); // true
isBool(Boolean(true)); // true

isBool(1, true); // false
isBool(new Boolean(true), true); // true
isBool(true, true); // true
isBool(false, true); // true
isBool(Boolean(true), true); // true
```

### • **is.boolean / isBoolean** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isBoolean.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isBoolean.test.ts))_

Determines whether the given value is a boolean.

This function is able to differenciate between "boolean literals" and "boolean instances".

-   By "boolean literals" is meant booleans created using `true` or `false`.
-   By "boolean instances" is meant booleans created using the `Boolean` constructor (ex.: new Boolean(true))

```js
isBoolean(1); // false
isBoolean(new Boolean(true)); // false
isBoolean(true); // true
isBoolean(false); // true
isBoolean(Boolean(true)); // true

isBoolean(1, true); // false
isBoolean(new Boolean(true), true); // true
isBoolean(true, true); // true
isBoolean(false, true); // true
isBoolean(Boolean(true), true); // true
```

### • **is.class / isClass** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isClass.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isClass.test.ts))_

Determines whether the given value is a class.
This function is able to distinguish between a function and a class.

```js
isClass(123); // false
isClass(() => {}); // false
isClass(function () {}); // false
isClass(function hello() {}); // false
isClass(new Function()); // false
isClass(new (class Hello {})()); // false
isClass(class Hello {}); // true
```

### • **is.date / isDate** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isDate.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isDate.test.ts))_

Determines whether the given value is a Date object.

```js
isDate(Date()); // false
isDate(new Date()); // true
```

### • **is.defined / isDefined** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isDefined.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isDefined.test.ts))_

Determines whether the given value is not `undefined`.

_This function is the opposite of the `isUndefined` function._

```js
isDefined(undefined); // false
isDefined(123); // true
isDefined(''); // true
```

### • **is.derivative / isDerivative** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isDerivative.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isDerivative.test.ts))_

Determines whether the given value is a "derivative".

A value is considered a "derivative" _(a made up word by the way, suggestions welcomed)_
if it is NOT a primitive _(null, undefined, boolean, number, string, symbol, bigint)_.
Basically an Object in the general JavaScript sense of the word "object".

This function should behave exactly as Lodash' `isObject` function.

_This function is an alias of the `isNotPrimitive` function._

```js
isDerivative(''); // false
isDerivative(String()); // false
isDerivative(new String()); // true
isDerivative(new Map()); // true
isDerivative([]); // true
isDerivative({}); // true
```

### • **is.documentFragment / isDocumentFragment** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isDocumentFragment.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isDocumentFragment.test.ts))_

Determines whether the given value is a `DocumentFragment`.

```js
isDocumentFragment({}); // false
isDocumentFragment(Document); // false
isDocumentFragment(Window); // false
isDocumentFragment(document.getRootNode()); // false
isDocumentFragment(document.body); // false
isDocumentFragment(document.querySelector('html')); // false
isDocumentFragment(document.createElement('img')); // false
isDocumentFragment(new DocumentFragment()); // true
isDocumentFragment(document.createDocumentFragment()); // true
```

### • **is.element / isElement** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isElement.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isElement.test.ts))_

Determines whether the given value is an Element.

Element is the most general base class from which all objects in a Document inherit.
It only has methods and properties common to all kinds of elements.
More specific classes inherit from Element.

```js
isElement({}); // false
isElement(Document); // false
isElement(Window); // false
isElement(document.getRootNode()); // false
isElement(document.body); // true
isElement(document.querySelector('html')); // true
isElement(document.createElement('img')); // true
```

### • **is.empty / isEmpty** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isEmpty.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isEmpty.test.ts))_

Determines whether the given value is "empty".

A value is considered "empty" if:

-   The value is "falsy" _(false, 0, -0, 0n, '', null, undefined, NaN)_
-   The value has a "length" property and it's value, a number, is "falsy" _(functions excluded)_
-   The value is a Map or a Set and it's size is "falsy"
-   The value, when an object, has no properties of it's own _(ex.: !Object.keys(value).length)_

```js
isEmpty('    '); // false
isEmpty(() => {}); // false
isEmpty(document.querySelectorAll('body')); // false
isEmpty(true); // false
isEmpty(false); // true
isEmpty(''); // true
isEmpty(0); // true
isEmpty([]); // true
isEmpty({}); // true
isEmpty(Object.create({})); // true
isEmpty(Object.create(null)); // true
isEmpty(Object.assign([], { a: 1, b: 2 })); // true
isEmpty(new Map()); // true
isEmpty(new String()); // true
isEmpty(document.querySelectorAll('non-existent-element')); // true
```

### • **is.event / isEvent** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isEvent.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isEvent.test.ts))_

Determines whether the given value is an event.

```js
isEvent(new Event('yo')); // true
isEvent(new CustomEvent('yo')); // true
```

### • **is.falsy / isFalsy** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isFalsy.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isFalsy.test.ts))_

Determines whether the given value is "falsy".

A value is considered "falsy" if it is equal to one of the following:

-   false
-   0
-   -0
-   0n
-   ''
-   null
-   undefined
-   NaN

See:

-   [https://developer.mozilla.org/en-US/docs/Glossary/Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

```js
isFalsy(1); // false
isFalsy(true); // false
isFalsy(0); // true
isFalsy(false); // true
```

### • **is.filled / isFilled** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isFilled.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isFilled.test.ts))_

Determines whether the given value is "filled".

A value is considered "filled" if:

-   The value is numeric _(ex.: 0, -0, '0', 3.72, '3.72')_
-   The value is a boolean _(ex.: false)_
-   The value is a function
-   The value is a bigInt _(ex.: 0n)_

A value is NOT considered "filled" if:

-   The value is null or undefined
-   The value is NaN
-   The value has a "length" property and it's value, a number, is "falsy"
-   The value has a "size" property and it's value, a number, is "falsy"
-   The value, when a string, and trimmed, is empty _(ex.: ' ')_
-   The value, when an object, has no properties of it's own _(ex.: !Object.keys(value).length)_

_This function is the opposite of the `isBlank` function._

```js
isFilled('    '); // false
isFilled(NaN); // false
isFilled([]); // false
isFilled({}); // false
isFilled(Object.create({})); // false
isFilled(Object.create(null)); // false
isFilled(Object.assign([], { a: 1, b: 2 })); // false
isFilled(new Map()); // false
isFilled(new String()); // false
isFilled(document.querySelectorAll('no-existent-element')); // false
isFilled('   hey '); // true
isFilled(0); // true
isFilled(false); // true
isFilled(() => {}); // true
isFilled(document.querySelectorAll('body')); // true
```

### • **is.float / isFloat** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isFloat.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isFloat.test.ts))_

Determines whether the given value is a float.

```js
isFloat(123); // false
isFloat(123.0); // false
isFloat(123.123); // true
```

### • **is.formData / isFormData** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isFormData.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isFormData.test.ts))_

Determines whether the given value is a FormData object.

```js
isFormData({}); // false
isFormData(new FormData()); // true
```

### • **is.infinity / isInfinity** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isInfinity.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isInfinity.test.ts))_

Determines whether the given value is `Infinity`.

```js
isInfinity(Infinity); // true
```

### • **is.int / isInt** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isInt.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isInt.test.ts))_

This function is an alias of the [`isInteger`](#-isInteger--isInteger-source--tests) function.

```js
isInt(123.123); // false
isInt(123.0); // true
isInt(123); // true
```

### • **is.integer / isInteger** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isInteger.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isInteger.test.ts))_

Determines whether the given value is an integer.

```js
isInteger(123.123); // false
isInteger(123.0); // true
isInteger(123); // true
```

### • **is.iterable / isIterable** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isIterable.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isIterable.test.ts))_

Determines whether the given value is an "iterable".

Iterable objects defines or customizes their iteration behavior, such as
what values are looped over in a `for...of` construct.
Some built-in types are [built-in iterables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#built-in_iterables) with a default iteration behavior,
such as `Array` or `Map`, while other types (such as `Object`) are not.

In order to be iterable, an object must implement the `@@iterator` method,
meaning that the object (or one of the objects up its prototype chain) must
have a property with an `@@iterator` key which is available via the constant
`Symbol.iterator` _(ex.: {[Symbol.iterator]: function() {}})_.

See:

-   [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
-   [https://javascript.info/iterable](https://javascript.info/iterable)

```js
isIterable(123); // false
isIterable([]); // true
isIterable({ hey: 'hello', [Symbol.iterator]: function () {} }); // true
```

### • **is.lengthy / isLengthy** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isLengthy.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isLengthy.test.ts))_

Determines whether the given value is "lengthy".

A value is considered "lengthy" if it has a `length`
property that returns a number.

```js
isLengthy(123); // false
isLengthy({ length: '0' }); // false
isLengthy(''); // true
isLengthy([]); // true
isLengthy({ length: 0 }); // true
```

### • **is.map / isMap** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isMap.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isMap.test.ts))_

Determines whether the given value is a Map.

```js
isMap([]); // false
isMap(new Map()); // true
```

### • **is.nan / isNan** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNan.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNan.test.ts))_

Determines whether the given value is `NaN`.

```js
isNan(NaN); // true
```

### • **is.nil / isNil** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNil.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNil.test.ts))_

This function is an alias of the [`isNullOrUndefined`](#-isNullOrUndefined--isNullOrUndefined-source--tests) function.

```js
isNil(123); // false
isNil(null); // true
isNil(undefined); // true
```

### • **is.nodeList / isNodeList** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNodeList.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNodeList.test.ts))_

Determines whether the given value is a NodeList.

```js
isNodeList([]); // false
isNodeList(document.querySelectorAll('body')); // true
```

### • **is.notEmpty / isNotEmpty** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNotEmpty.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNotEmpty.test.ts))_

Determines whether the given value is not "empty".

A value is considered "empty" if:

-   The value is "falsy" _(false, 0, -0, 0n, '', null, undefined, NaN)_
-   The value has a "length" property and it's value, a number, is "falsy" _(functions excluded)_
-   The value has a "size" property and it's value, a number, is "falsy"
-   The value, when an object, has no properties of it's own _(ex.: !Object.keys(value).length)_

_This function is the opposite of the `isEmpty` function._

```js
isNotEmpty(false); // false
isNotEmpty(''); // false
isNotEmpty(0); // false
isNotEmpty([]); // false
isNotEmpty({}); // false
isNotEmpty(Object.create({})); // false
isNotEmpty(Object.create(null)); // false
isNotEmpty(Object.assign([], { a: 1, b: 2 })); // false
isNotEmpty(new Map()); // false
isNotEmpty(new String()); // false
isNotEmpty(document.querySelectorAll('non-existent-element')); // false
isNotEmpty('    '); // true
isNotEmpty(() => {}); // true
isNotEmpty(document.querySelectorAll('body')); // true
isNotEmpty(true); // true
```

### • **is.notPrimitive / isNotPrimitive** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNotPrimitive.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNotPrimitive.test.ts))_

Determines whether the given value is not a "primitive".

A value is considered a "primitive" if it is equal to one of the following:

-   null
-   undefined
-   boolean
-   number
-   string
-   symbol
-   bigint

See:

-   [https://developer.mozilla.org/en-US/docs/Glossary/Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

```js
isNotPrimitive(String()); // false
isNotPrimitive(null); // false
isNotPrimitive(false); // false
isNotPrimitive(0n); // false
isNotPrimitive({}); // true
isNotPrimitive([]); // true
isNotPrimitive(new String()); // true
```

### • **is.null / isNull** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNull.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNull.test.ts))_

Determines whether the given value is `null`.

```js
isNull(123); // false
isNull(''); // false
isNull(null); // true
```

### • **is.nullOrUndefined / isNullOrUndefined** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNullOrUndefined.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNullOrUndefined.test.ts))_

Determines whether the given value is `null` or `undefined`.

```js
isNullOrUndefined(123); // false
isNullOrUndefined(null); // true
isNullOrUndefined(undefined); // true
```

### • **is.number / isNumber** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNumber.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNumber.test.ts))_

Determines whether the given value is a number.
Including `Infinity` but excluding `NaN`.

This function is able to differenciate between "number literals" and "number instances".

-   By "number literals" is meant numbers created when writing a number directly, or with `Number()`.
-   By "number instances" is meant numbers created using the `Number` constructor (ex.: new Number(123))

```js
isNumber('hey'); // false
isNumber(new Number(123)); // false
isNumber(123); // true

isNumber('hey', true); // false
isNumber(new Number(123), true); // true
isNumber(123, true); // true
```

### • **is.numeric / isNumeric** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isNumeric.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isNumeric.test.ts))_

Determines whether the given value is a number or a "numeric string".

A string is considered numeric if it can be interpreted as / coerced to
a number (as an integer or a float).

See:

-   [https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion)

```js
isNumeric('11 23'); // false
isNumeric('hey'); // false
isNumeric(true); // false
isNumeric(1); // true
isNumeric(0); // true
isNumeric(11.23); // true
isNumeric('1'); // true
isNumeric('0'); // true
isNumeric('11.23'); // true
```

### • **is.object / isObject** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isObject.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isObject.test.ts))_

Determines whether the given value is an "object literal".

A value is considered an "object literal" if it is an object
created by the `Object` constructor or one with a `[[Prototype]]`
of `null` or one where it's prototype's constructor is `Object`.

This function is similair but NOT identical to Lodash's `isPlainObject`.
The two functions differ in whether or not they choose to identify objects
created using an existing object as their prototype instead of the base `Object`
as "object literals" _(ex.: const myObject = Object.create({}))_.

Lodash's `isPlainObject` doesn't, ours do, as long as the created object's prototype's
constructor is `Object` _(ex.: myObject.prototype.constructor === Object)_.

See:

-   [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
-   [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)

```js
isObject(''); // false
isObject([]); // false
isObject(Math); // false
isObject(Object); // false
isObject(class Yolo {}); // false
isObject(new (class Yolo {})()); // false
isObject({}); // true
isObject(new Object()); // true
isObject(Object.create({ a: 1, b: 2 })); // true (lodash.isPlainObject --> false)
isObject(Object.create(null)); // true
```

### • **is.ofType / isOfType** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isOfType.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isOfType.test.ts))_

Determines whether the given value is of the given type or
one of the given types (if an array is given as a second argument).

Types can only be one of the following:

-   nil
-   number
-   primitive
-   derivative
-   null
-   undefined
-   bool
-   nan
-   infinity
-   int
-   float
-   string
-   symbol
-   bigInt
-   array
-   object
-   function

```js
isOfType(null, 'undefined'); // false
isOfType(null, 'bool'); // false
isOfType(null, 'null'); // true
isOfType(null, 'nil'); // true

isOfType(null, ['undefined']); // false
isOfType(null, ['undefined', 'bool', 'array']); // false
isOfType(null, ['null', 'undefined', 'nil']); // true
isOfType(null, ['undefined', 'nil']); // true
isOfType(null, ['nil']); // true
isOfType(null, ['null']); // true
isOfType(null, ['primitive']); // true
isOfType(null, ['undefined', 'bool', 'array', 'primitive']); // true
```

### • **is.primitive / isPrimitive** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isPrimitive.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isPrimitive.test.ts))_

Determines whether the given value is a "primitive".

A value is considered a "primitive" if it is equal to one of the following:

-   null
-   undefined
-   boolean
-   number _(including: number, NaN, Infinity)_
-   string
-   symbol
-   bigint

See:

-   [https://developer.mozilla.org/en-US/docs/Glossary/Primitive](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

```js
isPrimitive({}); // false
isPrimitive([]); // false
isPrimitive(new String()); // false
isPrimitive(String()); // true
isPrimitive(null); // true
isPrimitive(false); // true
isPrimitive(0n); // true
```

### • **is.promise / isPromise** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isPromise.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isPromise.test.ts))_

Determines whether the given value is a Promise.

```js
isPromise([]); // false
isPromise(new Promise(() => {})); // true
```

### • **is.set / isSet** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isSet.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isSet.test.ts))_

Determines whether the given value is a Set.

```js
isSet([]); // false
isSet(new Set()); // true
```

### • **is.shadowRoot / isShadowRoot** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isShadowRoot.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isShadowRoot.test.ts))_

Determines whether the given value is a ShadowRoot.

```js
isShadowRoot({}); // false
isShadowRoot(Document); // false
isShadowRoot(Window); // false
isShadowRoot(document.getRootNode()); // false
isShadowRoot(document.body); // false
isShadowRoot(document.querySelector('html')); // false
isShadowRoot(document.createElement('img')); // false
isShadowRoot(document.createElement('span').attachShadow({ mode: 'open' })); // true
```

### • **is.sizey / isSizey** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isSizey.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isSizey.test.ts))_

Determines whether the given value is "sizey".

A value is considered "sizey" if it has a `size`
property that returns a number.

```js
isSizey(123); // false
isSizey({ size: '0' }); // false
isSizey(new Map()); // true
isSizey({ size: 0 }); // true
```

### • **is.string / isString** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isString.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isString.test.ts))_

Determines whether the given value is a string.

This function is able to differenciate between "string literals" and "string instances".

-   By "string literals" is meant strings created using `''`, `""`, `` ` ` ``, or `String()`.
-   By "string instances" is meant strings created using the `String` constructor (ex.: new String('hey'))

```js
isString(1); // false
isString(new String('hey')); // false
isString('hey'); // true

isString(1, true); // false
isString(new String('hey'), true); // true
isString('hey', true); // true
```

### • **is.symbol / isSymbol** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isSymbol.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isSymbol.test.ts))_

Determines whether the given value is a Symbol.

```js
isSymbol(123); // false
isSymbol(Symbol(123)); // true
```

### • **is.syncFunction / isSyncFunction** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isSyncFunction.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isSyncFunction.test.ts))_

Determines whether the given value is a sync function.

```js
isSyncFunction(123); // false
isSyncFunction(new (class Hello {})()); // false
isSyncFunction(async function hello() {}); // false
isSyncFunction(() => {}); // true
isSyncFunction(function () {}); // true
isSyncFunction(function hello() {}); // true
isSyncFunction(class Hello {}); // true
isSyncFunction(new Function()); // true
```

### • **is.textNode / isTextNode** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isTextNode.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isTextNode.test.ts))_

Determines whether the given value is a Text.

```js
isTextNode([]); // false
isTextNode(document.createTextNode('')); // true
```

### • **is.truthy / isTruthy** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isTruthy.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isTruthy.test.ts))_

Determines whether the given value is "truthy".

A value is considered "truthy" if it is NOT equal to one of the following:

-   false
-   0
-   -0
-   0n
-   ''
-   null
-   undefined
-   NaN

See:

-   [https://developer.mozilla.org/en-US/docs/Glossary/Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)

```js
isTruthy(0); // false
isTruthy(false); // false
isTruthy(1); // true
isTruthy(true); // true
```

### • **is.typedAs / isTypedAs** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isTypedAs.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isTypedAs.test.ts))_

Retrieves a given value's type.

The returned type can only be one of the following:

-   nil
-   bool
-   nan
-   infinity
-   int
-   float
-   string
-   symbol
-   bigInt
-   array
-   object
-   function
-   derivative

```js
isTypedAs(null); // nil
isTypedAs(undefined); // nil
isTypedAs(true); // bool
isTypedAs(NaN); // nan
isTypedAs(Infinity); // infinity
isTypedAs(123); // int
isTypedAs(123.1); // float
isTypedAs(Symbol(123)); // symbol
isTypedAs(123n); // bigInt
isTypedAs([]); // array
isTypedAs(() => {}); // function
isTypedAs(class Hello {}); // function
isTypedAs(new Function()); // function
isTypedAs(Math); // derivative
isTypedAs(new Map()); // derivative
isTypedAs(new (class Hello {})()); // derivative
```

### • **is.undefined / isUndefined** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isUndefined.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isUndefined.test.ts))_

Determines whether the given value is `undefined`.

```js
isUndefined(123); // false
isUndefined(''); // false
isUndefined(undefined); // true
```

### • **is.urlSearchParams / isUrlSearchParams** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isUrlSearchParams.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isUrlSearchParams.test.ts))_

Determines whether the given value is a URLSearchParams object.

```js
isUrlSearchParams({}); // false
isUrlSearchParams(new URLSearchParams()); // true
```

### • **is.weakMap / isWeakMap** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isWeakMap.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isWeakMap.test.ts))_

Determines whether the given value is a WeakMap.

```js
isWeakMap([]); // false
isWeakMap(new WeakMap()); // true
```

### • **is.weakSet / isWeakSet** _([Source](https://github.com/VicGUTT/isjs/blob/main/src/isWeakSet.ts) | [Tests](https://github.com/VicGUTT/isjs/blob/main/tests/is/isWeakSet.test.ts))_

Determines whether the given value is a WeakSet.

```js
isWeakSet([]); // false
isWeakSet(new WeakSet()); // true
```

<!-- /{{ CONTENT }} -->

## Pro tips

### Import what you need

For better tree shaking support and not having to import all the available functions when only a few is needed, I recommend creating and exporting a custom `is` object containing only the functions needed.

Something similar to:

```js
// utils/is.js

import isString from '@vicgutt/isjs/isString';
import isClass from '@vicgutt/isjs/isClass';
import isFunction from '@vicgutt/isjs/isFunction';

export default {
    string: isString,
    class: isClass,
    function: isFunction,
};

// some-folder/some-file.js

import is from '../utils/is';

if (is.string(someVariable)) {
    //
}
```

### Ensure TypeScript support

This library uses the newer Node's package.json's [`exports`](https://nodejs.org/api/packages.html#exports) field to expose the individual functions to end users which may cause TypeScript not knowing where to get the associated `.d.ts` files.
Therefore, if on a non compatible TypeScript version _(which seems to be the case on the latest v4.5.5)_, I'd recomment adding the following key/values to your `tsconfig.json`.

```json
{
    "baseUrl": ".",
    "paths": {
        "@vicgutt/isjs/*": ["./node_modules/@vicgutt/isjs/dist/*"]
    }
}
```

<!-- ## Changelog

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently. -->

## Contributing

If you're interested in contributing to the project, please read our [contributing docs](https://github.com/VicGUTT/isjs/blob/main/.github/CONTRIBUTING.md) **before submitting a pull request**.

The _"Available functions"_ portion of this README is generated by parsing each function's jsDoc.

## License

The MIT License (MIT). Please see [License File](LICENSE) for more information.
