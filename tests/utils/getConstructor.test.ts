import { describe, it, expect } from 'vitest';
import getConstructor from '../../src/utils/getConstructor.js';

describe('utils/getConstructor', () => {
    it('null does not have a constructor', () => {
        expect(getConstructor(null)).toEqual(null);
    });

    it('undefined does not have a constructor', () => {
        expect(getConstructor(undefined)).toEqual(null);
    });

    it("can retrieve a boolean's constructor", () => {
        expect(getConstructor(true)).toEqual(Boolean);
        expect(getConstructor(false)).toEqual(Boolean);
    });

    it("can retrieve an integer's constructor", () => {
        expect(getConstructor(0)).toEqual(Number);
        expect(getConstructor(1)).toEqual(Number);
        expect(getConstructor(999)).toEqual(Number);

        expect(getConstructor(-0)).toEqual(Number);
        expect(getConstructor(-1)).toEqual(Number);
        expect(getConstructor(-999)).toEqual(Number);
    });

    it("can retrieve a float's constructor", () => {
        expect(getConstructor(0.5)).toEqual(Number);
        expect(getConstructor(7.5)).toEqual(Number);
        expect(getConstructor(67890.735)).toEqual(Number);

        expect(getConstructor(-0.5)).toEqual(Number);
        expect(getConstructor(-7.5)).toEqual(Number);
        expect(getConstructor(-67890.735)).toEqual(Number);
    });

    it("can retrieve a bigInt's constructor", () => {
        expect(getConstructor(10n)).toEqual(BigInt);
        expect(getConstructor(9007199254740991n)).toEqual(BigInt);
        expect(getConstructor(BigInt(10))).toEqual(BigInt);
        expect(getConstructor(BigInt(9007199254740991))).toEqual(BigInt);
        expect(getConstructor(BigInt('10'))).toEqual(BigInt);
        expect(getConstructor(BigInt('9007199254740991'))).toEqual(BigInt);
        expect(getConstructor(BigInt('0x1fffffffffffff'))).toEqual(BigInt);
        expect(getConstructor(BigInt('0o377777777777777777'))).toEqual(BigInt);
        expect(getConstructor(BigInt('0b11111111111111111111111111111111111111111111111111111'))).toEqual(BigInt);

        expect(getConstructor(-10n)).toEqual(BigInt);
        expect(getConstructor(-9007199254740991n)).toEqual(BigInt);
        expect(getConstructor(BigInt(-10))).toEqual(BigInt);
        expect(getConstructor(BigInt(-9007199254740991))).toEqual(BigInt);
        expect(getConstructor(BigInt('-10'))).toEqual(BigInt);
        expect(getConstructor(BigInt('-9007199254740991'))).toEqual(BigInt);
    });

    it("can retrieve a string's constructor", () => {
        expect(getConstructor('null')).toEqual(String);
        expect(getConstructor('undefined')).toEqual(String);
        expect(getConstructor('')).toEqual(String);
        expect(getConstructor('0')).toEqual(String);
        expect(getConstructor('1')).toEqual(String);
        expect(getConstructor('-0')).toEqual(String);
        expect(getConstructor('-1')).toEqual(String);
        expect(getConstructor('1.8')).toEqual(String);
        expect(getConstructor('-1.8')).toEqual(String);
        expect(getConstructor('true')).toEqual(String);
        expect(getConstructor('false')).toEqual(String);
        expect(getConstructor('[]')).toEqual(String);
        expect(getConstructor('{}')).toEqual(String);
        expect(getConstructor('Hey')).toEqual(String);
    });

    it("can retrieve a symbol's constructor", () => {
        expect(getConstructor(Symbol())).toEqual(Symbol);
        expect(getConstructor(Symbol('hey'))).toEqual(Symbol);
    });

    it("can retrieve an array's constructor", () => {
        expect(getConstructor(new Array())).toEqual(Array); // eslint-disable-line @typescript-eslint/no-array-constructor
        expect(getConstructor(Array())).toEqual(Array); // eslint-disable-line @typescript-eslint/no-array-constructor
        expect(getConstructor([])).toEqual(Array);
        expect(getConstructor([1, 2, 4.8])).toEqual(Array);
        expect(getConstructor(['hey', '2.4'])).toEqual(Array);
        expect(getConstructor([[]])).toEqual(Array);
        expect(getConstructor([{}])).toEqual(Array);
        expect(getConstructor([Map])).toEqual(Array);
        expect(getConstructor([new Map()])).toEqual(Array);
    });

    it("can retrieve a function's constructor", () => {
        expect(getConstructor(() => {})).toEqual(Function); // eslint-disable-line @typescript-eslint/no-empty-function
        expect(getConstructor(function () {})).toEqual(Function); // eslint-disable-line @typescript-eslint/no-empty-function
        expect(getConstructor(function hello() {})).toEqual(Function); // eslint-disable-line @typescript-eslint/no-empty-function
    });

    it("can retrieve a classe's constructor", () => {
        expect(getConstructor(class Hello {})).toEqual(Function);
    });

    it("can retrieve a constructor's constructor", () => {
        expect(getConstructor(Boolean)).toEqual(Function);
        expect(getConstructor(Number)).toEqual(Function);
        expect(getConstructor(BigInt)).toEqual(Function);
        expect(getConstructor(String)).toEqual(Function);
        expect(getConstructor(Array)).toEqual(Function);
        expect(getConstructor(Function)).toEqual(Function);
        expect(getConstructor(Object)).toEqual(Function);
        expect(getConstructor(Map)).toEqual(Function);
        expect(getConstructor(WeakSet)).toEqual(Function);
        expect(getConstructor(Date)).toEqual(Function);
        expect(getConstructor(Promise)).toEqual(Function);
    });

    it("can retrieve invoked constructor's constructor", () => {
        expect(getConstructor(Boolean())).toEqual(Boolean);
        expect(getConstructor(Number())).toEqual(Number);
        expect(getConstructor(String())).toEqual(String);
        expect(getConstructor(Array())).toEqual(Array); // eslint-disable-line @typescript-eslint/no-array-constructor
        expect(getConstructor(Function())).toEqual(Function);
        expect(getConstructor(Date())).toEqual(String);
    });

    it("can retrieve an instance's constructor", () => {
        const hey = class Hey {};

        expect(getConstructor(new Boolean())).toEqual(Boolean);
        expect(getConstructor(new Number())).toEqual(Number);
        expect(getConstructor(new String())).toEqual(String);
        expect(getConstructor(new Array())).toEqual(Array); // eslint-disable-line @typescript-eslint/no-array-constructor
        expect(getConstructor(new Function())).toEqual(Function);
        expect(getConstructor(new Map())).toEqual(Map);
        expect(getConstructor(new WeakSet())).toEqual(WeakSet);
        expect(getConstructor(new Date())).toEqual(Date);
        expect(getConstructor(new Promise(() => {}))).toEqual(Promise); // eslint-disable-line @typescript-eslint/no-empty-function
        expect(getConstructor(new hey())).toEqual(hey);
    });

    it("can retrieve invoked object's constructor", () => {
        expect(getConstructor(Object())).toEqual(Object);
    });

    it("can retrieve constructed object's constructor", () => {
        expect(getConstructor(new Object())).toEqual(Object);
    });

    it("can retrieve object literal's constructor", () => {
        expect(getConstructor({})).toEqual(Object);
        expect(getConstructor({ hey: 'hello' })).toEqual(Object);
        expect(getConstructor({ hey: ['hello'] })).toEqual(Object);
    });

    it("can't be tricked when an object literal has it's own constructor property", () => {
        expect(getConstructor({ constructor: 'foo' })).toEqual(Object);
    });
});
