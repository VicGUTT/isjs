/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isInteger from '../../src/isInteger.js';
import isInt from '../../src/isInt.js';

describe('is/isInt', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isInt() === isInteger() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isInt(value)).toEqual(isInteger(value));
            });
        });
    });
});
