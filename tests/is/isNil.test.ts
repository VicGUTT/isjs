/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isNullOrUndefined from '../../src/isNullOrUndefined.js';
import isNil from '../../src/isNil.js';

describe('is/isNil', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isNil() === isNullOrUndefined() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isNil(value)).toEqual(isNullOrUndefined(value));
            });
        });
    });
});
