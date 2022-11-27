/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values';
import isEmpty from '../../src/isEmpty';
import isNotEmpty from '../../src/isNotEmpty';

describe('is/isNotEmpty', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isNotEmpty() === !isEmpty() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isNotEmpty(value)).toEqual(!isEmpty(value));
            });
        });
    });
});
