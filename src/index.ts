import type { SubType, SuperType, Type } from './types';

/**
 * Type checks
 */
import isArray from './isArray';
import isAsyncFunction from './isAsyncFunction';
import isBigInt from './isBigInt';
import isBool from './isBool';
import isBoolean from './isBoolean';
import isClass from './isClass';
import isDate from './isDate';
import isDefined from './isDefined';
import isDerivative from './isDerivative';
import isDocumentFragment from './isDocumentFragment';
import isElement from './isElement';
import isEvent from './isEvent';
import isFalsy from './isFalsy';
import isFloat from './isFloat';
import isFormData from './isFormData';
import isFunction from './isFunction';
import isInfinity from './isInfinity';
import isInt from './isInt';
import isInteger from './isInteger';
import isIterable from './isIterable';
import isLengthy from './isLengthy';
import isMap from './isMap';
import isNan from './isNan';
import isNil from './isNil';
import isNodeList from './isNodeList';
import isNotPrimitive from './isNotPrimitive';
import isNull from './isNull';
import isNullOrUndefined from './isNullOrUndefined';
import isNumber from './isNumber';
import isNumeric from './isNumeric';
import isObject from './isObject';
import isPrimitive from './isPrimitive';
import isPromise from './isPromise';
import isSet from './isSet';
import isShadowRoot from './isShadowRoot';
import isSizey from './isSizey';
import isString from './isString';
import isSymbol from './isSymbol';
import isSyncFunction from './isSyncFunction';
import isTextNode from './isTextNode';
import isTruthy from './isTruthy';
import isUndefined from './isUndefined';
import isUrlSearchParams from './isUrlSearchParams';
import isWeakMap from './isWeakMap';
import isWeakSet from './isWeakSet';

/**
 * State checks
 */
import isBlank from './isBlank';
import isEmpty from './isEmpty';
import isFilled from './isFilled';
import isNotEmpty from './isNotEmpty';

/**
 * Type detection/assertion
 */
import isOfType from './isOfType';
import isTypedAs from './isTypedAs';

/**
 * Own props
 */
import TYPES, { SUB_TYPES, SUPER_TYPES } from './constants/TYPES';
import VERSION from './constants/VERSION';

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
