/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isUndefined from '../../src/isUndefined.js';
import isDefined from '../../src/isDefined.js';

describe('is/isDefined', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isDefined() === !isUndefined() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isDefined(value)).toEqual(!isUndefined(value));
            });
        });
    });
});
