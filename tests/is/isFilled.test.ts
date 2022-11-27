/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, test, expect } from 'vitest';
import values from '../__Fixtures/values';
import isBlank from '../../src/isBlank';
import isFilled from '../../src/isFilled';

describe('is/isFilled', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isFilled() === !isBlank() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isFilled(value)).toEqual(!isBlank(value));
            });
        });
    });
});
