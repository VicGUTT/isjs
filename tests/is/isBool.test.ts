/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isBoolean from '../../src/isBoolean.js';
import isBool from '../../src/isBool.js';

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
