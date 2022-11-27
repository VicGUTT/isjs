/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values';
import isNotPrimitive from '../../src/isNotPrimitive';
import isDerivative from '../../src/isDerivative';

describe('is/isDerivative', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isDerivative() === isNotPrimitive() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isDerivative(value)).toEqual(isNotPrimitive(value));
            });
        });
    });
});
