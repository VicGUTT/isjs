/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isInteger from '../../src/isInteger';
import isInt from '../../src/isInt';

describe('is:isInt', () => {
    Object.entries(values).forEach(([key, items]) => {
        test(`isInt() === isInteger() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isInt(value)).toEqual(isInteger(value));
            });
        });
    });
});
