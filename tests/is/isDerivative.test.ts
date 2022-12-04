/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isNotPrimitive from '../../src/isNotPrimitive.js';
import isDerivative from '../../src/isDerivative.js';

describe('is/isDerivative', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isDerivative() === isNotPrimitive() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isDerivative(value)).toEqual(isNotPrimitive(value));
            });
        });
    });
});
