/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values';
import isBoolean from '../../src/isBoolean';
import isBool from '../../src/isBool';

describe('is/isBool', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isBool() === isBoolean() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isBool(value)).toEqual(isBoolean(value));
                expect(isBool(value, true)).toEqual(isBoolean(value, true));
            });
        });
    });
});
