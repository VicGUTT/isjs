/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values.js';
import isEmpty from '../../src/isEmpty.js';
import isNotEmpty from '../../src/isNotEmpty.js';

describe('is/isNotEmpty', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isNotEmpty() === !isEmpty() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isNotEmpty(value)).toEqual(!isEmpty(value));
            });
        });
    });
});
