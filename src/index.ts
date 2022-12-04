import type { SubType, SuperType, Type } from './types/index.js';

/**
 * Type checks
 */
import isArray from './isArray.js';
import isAsyncFunction from './isAsyncFunction.js';
import isBigInt from './isBigInt.js';
import isBool from './isBool.js';
import isBoolean from './isBoolean.js';
import isClass from './isClass.js';
import isDate from './isDate.js';
import isDefined from './isDefined.js';
import isDerivative from './isDerivative.js';
import isDocumentFragment from './isDocumentFragment.js';
import isElement from './isElement.js';
import isEvent from './isEvent.js';
import isFalsy from './isFalsy.js';
import isFloat from './isFloat.js';
import isFormData from './isFormData.js';
import isFunction from './isFunction.js';
import isInfinity from './isInfinity.js';
import isInt from './isInt.js';
import isInteger from './isInteger.js';
import isIterable from './isIterable.js';
import isLengthy from './isLengthy.js';
import isMap from './isMap.js';
import isNan from './isNan.js';
import isNil from './isNil.js';
import isNodeList from './isNodeList.js';
import isNotPrimitive from './isNotPrimitive.js';
import isNull from './isNull.js';
import isNullOrUndefined from './isNullOrUndefined.js';
import isNumber from './isNumber.js';
import isNumeric from './isNumeric.js';
import isObject from './isObject.js';
import isPrimitive from './isPrimitive.js';
import isPromise from './isPromise.js';
import isSet from './isSet.js';
import isShadowRoot from './isShadowRoot.js';
import isSizey from './isSizey.js';
import isString from './isString.js';
import isSymbol from './isSymbol.js';
import isSyncFunction from './isSyncFunction.js';
import isTextNode from './isTextNode.js';
import isTruthy from './isTruthy.js';
import isUndefined from './isUndefined.js';
import isUrlSearchParams from './isUrlSearchParams.js';
import isWeakMap from './isWeakMap.js';
import isWeakSet from './isWeakSet.js';

/**
 * State checks
 */
import isBlank from './isBlank.js';
import isEmpty from './isEmpty.js';
import isFilled from './isFilled.js';
import isNotEmpty from './isNotEmpty.js';

/**
 * Type detection/assertion
 */
import isOfType from './isOfType.js';
import isTypedAs from './isTypedAs.js';

/**
 * Own props
 */
import TYPES, { SUB_TYPES, SUPER_TYPES } from './constants/TYPES.js';
import VERSION from './constants/VERSION.js';

/*
 * Small script to format the keys :
 * ['isArray', 'isXxxx', ...].map(val => (val = val.replace(/^is/, '')) && val.charAt(0).toLowerCase() + val.slice(1));
 */
export default {
    array: isArray,
    asyncFunction: isAsyncFunction,
    bigInt: isBigInt,
    blank: isBlank,
    bool: isBool,
    boolean: isBoolean,
    class: isClass,
    date: isDate,
    defined: isDefined,
    derivative: isDerivative,
    documentFragment: isDocumentFragment,
    element: isElement,
    empty: isEmpty,
    event: isEvent,
    falsy: isFalsy,
    filled: isFilled,
    float: isFloat,
    formData: isFormData,
    function: isFunction,
    infinity: isInfinity,
    int: isInt,
    integer: isInteger,
    iterable: isIterable,
    lengthy: isLengthy,
    map: isMap,
    nan: isNan,
    nil: isNil,
    nodeList: isNodeList,
    notEmpty: isNotEmpty,
    notPrimitive: isNotPrimitive,
    null: isNull,
    nullOrUndefined: isNullOrUndefined,
    number: isNumber,
    numeric: isNumeric,
    object: isObject,
    ofType: isOfType,
    primitive: isPrimitive,
    promise: isPromise,
    set: isSet,
    shadowRoot: isShadowRoot,
    sizey: isSizey,
    string: isString,
    symbol: isSymbol,
    syncFunction: isSyncFunction,
    textNode: isTextNode,
    truthy: isTruthy,
    typedAs: isTypedAs,
    undefined: isUndefined,
    urlSearchParams: isUrlSearchParams,
    weakMap: isWeakMap,
    weakSet: isWeakSet,
    get SUPER_TYPES(): SuperType[] {
        return SUPER_TYPES;
    },
    get SUB_TYPES(): SubType[] {
        return SUB_TYPES;
    },
    get TYPES(): Type[] {
        return TYPES;
    },
    get VERSION(): string {
        return VERSION;
    },
};

/*
 * Allow `is` to be invoked (`is('yolo')`) ?
 */

// const _is = {
//     array: isArray,
//     // ...
// };

// function is(value: unknown) {
//     // All `TYPES` + `isPrimitive`
//     return {
//         nil: isNil(value),
//         bool: isBoolean(value),
//         nan: isNan(value),
//         infinity: isInfinity(value),
//         int: isInt(value),
//         float: isFloat(value),
//         number: isNumber(value),
//         string: isString(value),
//         symbol: isSymbol(value),
//         bigInt: isBigInt(value),
//         array: isArray(value),
//         object: isObject(value),
//         function: isFunction(value),
//         derivative: isDerivative(value),
//         primitive: isPrimitive(value),
//         get VERSION() {
//             return VERSION;
//         },
//     };
// }

// Object.assign(is, _is);

// export default is as typeof is & typeof _is;
