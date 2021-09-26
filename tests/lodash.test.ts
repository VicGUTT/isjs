import values from './__Fixtures/values';
import lodash from './__utils/lodash';
import is from '../src';

describe('lodash', () => {
    test(`is.array() === lodash.isArray()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.array(value)).toEqual(lodash.isArray(value));
            });
        });
    });

    test(`is.bool(, false) !== lodash.isBoolean()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                if (typeof value === 'boolean') {
                    expect(is.bool(value)).toEqual(lodash.isBoolean(value));
                } else {
                    expect(is.bool(value)).toEqual(false);
                    expect(lodash.isBoolean(value)).toEqual(value?.constructor === Boolean);
                }
            });
        });
    });

    test(`is.bool(, true) === lodash.isBoolean()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.bool(value, true)).toEqual(lodash.isBoolean(value));
            });
        });
    });

    test(`is.date() === lodash.isDate()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.date(value)).toEqual(lodash.isDate(value));
            });
        });
    });

    test(`is.element() === lodash.isElement()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.element(value)).toEqual(lodash.isElement(value));
            });
        });
    });

    test(`is.empty() !== lodash.isEmpty()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                if (is.string(value) || is.array(value) || is.set(value) || is.map(value)) {
                    expect(is.empty(value)).toEqual(lodash.isEmpty(value));
                    return;
                }

                if (is.primitive(value)) {
                    expect(is.empty(value)).toEqual(!value);
                    expect(lodash.isEmpty(value)).toEqual(true);
                    return;
                }

                const proto = Object.getPrototypeOf(value);

                // Ex.: Object.create(null) || Any object literal
                if (proto === null || proto === Object.prototype) {
                    expect(is.empty(value)).toEqual(lodash.isEmpty(value));
                    return;
                }

                // Ex.: Object.create({ a: 1, b: 2 })
                if (proto !== Object.prototype && proto.constructor === Object) {
                    expect(is.empty(value)).toEqual(lodash.isEmpty(value));
                    return;
                }

                expect(lodash.isEmpty(value)).toEqual(!Object.keys(value).length);

                if (is.lengthy(value) && !is.function(value)) {
                    expect(is.empty(value)).toEqual(!value.length);
                    return;
                }

                expect(is.empty(value)).toEqual(false);
            });
        });
    });

    test(`is.function() === lodash.isFunction()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.function(value)).toEqual(lodash.isFunction(value));
            });
        });
    });

    test(`is.int() === lodash.isInteger()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.int(value)).toEqual(lodash.isInteger(value));
            });
        });
    });

    test(`is.map() === lodash.isMap()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.map(value)).toEqual(lodash.isMap(value));
            });
        });
    });

    test(`is.nan() === lodash.isNaN()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.nan(value)).toEqual(lodash.isNaN(value));
            });
        });
    });

    test(`is.nil() === lodash.isNil()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.nil(value)).toEqual(lodash.isNil(value));
            });
        });
    });

    test(`is.null() === lodash.isNull()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.null(value)).toEqual(lodash.isNull(value));
            });
        });
    });

    test(`is.number(, false) !== lodash.isNumber()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                if (typeof value === 'number' && Number.isNaN(value)) {
                    expect(is.number(value)).toEqual(false);
                    expect(lodash.isNumber(value)).toEqual(true);
                    return;
                }

                if (typeof value === 'number') {
                    expect(is.number(value)).toEqual(lodash.isNumber(value));
                } else {
                    expect(is.number(value)).toEqual(false);
                    expect(lodash.isNumber(value)).toEqual(value?.constructor === Number);
                }
            });
        });
    });

    test(`is.number(, true) !== lodash.isNumber()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                if (Number.isNaN(value)) {
                    expect(is.number(value, true)).toEqual(false);
                    expect(lodash.isNumber(value)).toEqual(true);
                    return;
                }

                expect(is.number(value, true)).toEqual(lodash.isNumber(value));
            });
        });
    });

    test(`is.derivative() === lodash.isObject()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.derivative(value)).toEqual(lodash.isObject(value));
            });
        });
    });

    test(`is.object() !== lodash.isPlainObject()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                const proto = value ? Object.getPrototypeOf(value) : null;

                // Ex.: Object.create({ a: 1, b: 2 })
                if (proto && proto !== Object.prototype && proto.constructor === Object) {
                    expect(is.object(value)).toEqual(true);
                    expect(lodash.isPlainObject(value)).toEqual(false);
                    return;
                }

                expect(is.object(value)).toEqual(lodash.isPlainObject(value));
            });
        });
    });

    test(`is.set() === lodash.isSet()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.set(value)).toEqual(lodash.isSet(value));
            });
        });
    });

    test(`is.string(, false) !== lodash.isString()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                if (typeof value === 'string') {
                    expect(is.string(value)).toEqual(lodash.isString(value));
                } else {
                    expect(is.string(value)).toEqual(false);
                    expect(lodash.isString(value)).toEqual(value?.constructor === String);
                }
            });
        });
    });

    test(`is.string(, true) === lodash.isString()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.string(value, true)).toEqual(lodash.isString(value));
            });
        });
    });

    test(`is.symbol() === lodash.isSymbol()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.symbol(value)).toEqual(lodash.isSymbol(value));
            });
        });
    });

    test(`is.undefined() === lodash.isUndefined()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.undefined(value)).toEqual(lodash.isUndefined(value));
            });
        });
    });

    test(`is.weakMap() === lodash.isWeakMap()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.weakMap(value)).toEqual(lodash.isWeakMap(value));
            });
        });
    });

    test(`is.weakSet() === lodash.isWeakSet()`, () => {
        Object.entries(values).forEach(([, items]) => {
            items.forEach((value) => {
                expect(is.weakSet(value)).toEqual(lodash.isWeakSet(value));
            });
        });
    });
});
