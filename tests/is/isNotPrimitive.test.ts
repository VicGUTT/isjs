/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isPrimitive from '../../src/isPrimitive.js';
import isNotPrimitive from '../../src/isNotPrimitive.js';

describe('is/isNotPrimitive', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isNotPrimitive() === !isPrimitive() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isNotPrimitive(value)).toEqual(!isPrimitive(value));
            });
        });
    });
});
