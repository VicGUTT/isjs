import { type UnknownConstructor } from '../../src/types';
import { describe, it, expect } from 'vitest';
import instanceOf from '../../src/utils/instanceOf';

describe('utils/instanceOf', () => {
    it('works', () => {
        // @ts-expect-error Yeah yeah...
        expect(instanceOf(null, null)).toEqual(false);

        // @ts-expect-error Yeah yeah...
        expect(instanceOf(undefined, undefined)).toEqual(false);

        expect(instanceOf(new Array(), Array)).toEqual(true); // eslint-disable-line @typescript-eslint/no-array-constructor
        expect(instanceOf(Array(), Array)).toEqual(true); // eslint-disable-line @typescript-eslint/no-array-constructor
        expect(instanceOf([], Array)).toEqual(true);

        expect(instanceOf(() => {}, Function)).toEqual(true); // eslint-disable-line @typescript-eslint/no-empty-function
        expect(instanceOf(function () {}, Function)).toEqual(true); // eslint-disable-line @typescript-eslint/no-empty-function
        expect(instanceOf(function hello() {}, Function)).toEqual(true); // eslint-disable-line @typescript-eslint/no-empty-function

        expect(instanceOf(class Hello {}, Function)).toEqual(true);

        expect(instanceOf(Boolean(), Boolean)).toEqual(false);
        expect(instanceOf(Number(), Number)).toEqual(false);
        expect(instanceOf(String(), String)).toEqual(false);
        expect(instanceOf(Array(), Array)).toEqual(true); // eslint-disable-line @typescript-eslint/no-array-constructor
        expect(instanceOf(Function(), Function)).toEqual(true);
        expect(instanceOf(Date(), Date)).toEqual(false);

        const hey = class Hey {};

        expect(instanceOf(new Boolean(), Boolean)).toEqual(true);
        expect(instanceOf(new Number(), Number)).toEqual(true);
        expect(instanceOf(new String(), String)).toEqual(true);
        expect(instanceOf(new Array(), Array)).toEqual(true); // eslint-disable-line @typescript-eslint/no-array-constructor
        expect(instanceOf(new Function(), Function)).toEqual(true);
        expect(instanceOf(new Map(), Map)).toEqual(true);
        expect(instanceOf(new WeakSet(), WeakSet)).toEqual(true);
        expect(instanceOf(new Date(), Date)).toEqual(true);
        expect(instanceOf(new Promise(() => {}), Promise)).toEqual(true); // eslint-disable-line @typescript-eslint/no-empty-function
        expect(instanceOf(new hey(), hey as UnknownConstructor)).toEqual(true);

        expect(instanceOf(Object(), Object)).toEqual(true);

        expect(instanceOf(new Object(), Object)).toEqual(true);

        expect(instanceOf({}, Object)).toEqual(true);
        expect(instanceOf({ hey: 'hello' }, Object)).toEqual(true);
        expect(instanceOf({ hey: ['hello'] }, Object)).toEqual(true);
    });
});
