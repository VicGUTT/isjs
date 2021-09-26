/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import values from '../__Fixtures/values';
import isBlank from '../../src/isBlank';
import isObject from '../../src/isObject';

const KEY = 'blanks';

const _isBlank = (value: unknown): boolean => {
    if (value === '' || value === ' ') {
        return true;
    }

    if (value === null || value === undefined || typeof value === 'undefined') {
        return true;
    }

    if (value === true || value === false) {
        return false;
    }

    if (Number.isNaN(value)) {
        return true;
    }

    if (value === 0) {
        return false;
    }

    if (value === 0n) {
        return false;
    }

    if (Number.isInteger(value)) {
        return false;
    }

    if (typeof value === 'number' && !Number.isFinite(value)) {
        return false;
    }

    if (typeof value === 'number' && Number.isInteger(Math.floor(value))) {
        return false;
    }

    if (typeof value === 'string' && !Number.isNaN(parseFloat(value))) {
        return false;
    }

    if (typeof value === 'function') {
        return false;
    }

    if (Number.isInteger((value as { length: number })?.length)) {
        return !(value as { length: number }).length;
    }

    if (Number.isInteger((value as { size: number })?.size)) {
        return !(value as { size: number }).size;
    }

    if (isObject(value)) {
        return !Object.keys(value).length;
    }

    return !value;
};

const filterBlanks = (items: unknown[]): unknown[] => {
    return items.filter((item) => _isBlank(item));
};
const rejectBlanks = (items: unknown[]): unknown[] => {
    return items.filter((item) => !_isBlank(item));
};

describe('is:isBlank', () => {
    it(`✅ nil === ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isBlank(value)).toEqual(true);
        });
    });

    it(`❌ booleans !== ${KEY}`, () => {
        values.booleans.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ integers !== ${KEY}`, () => {
        values.integers.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ filled numbers !== ${KEY}`, () => {
        rejectBlanks(values.numbers).forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`✅ blank numbers === ${KEY}`, () => {
        const blanks = filterBlanks(values.numbers);

        expect(blanks).toEqual([NaN]);

        blanks.forEach((value) => {
            expect(isBlank(value)).toEqual(true);
        });
    });

    it(`❌ bigInts != ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ filled strings !== ${KEY}`, () => {
        rejectBlanks(values.strings).forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`✅ blank strings === ${KEY}`, () => {
        const blanks = filterBlanks(values.strings);

        expect(blanks).toEqual(['', ' ', '']);

        blanks.forEach((value) => {
            expect(isBlank(value)).toEqual(true);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ filled arrays !== ${KEY}`, () => {
        rejectBlanks(values.arrays).forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`✅ blank arrays === ${KEY}`, () => {
        const blanks = filterBlanks(values.arrays);

        expect(blanks).toEqual([[], [], Object.assign([], { a: 1, b: 2 })]);

        blanks.forEach((value) => {
            expect(isBlank(value)).toEqual(true);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ filled DOM nodeLists !== ${KEY}`, () => {
        rejectBlanks(values.nodeLists).forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`✅ blank DOM nodeLists === ${KEY}`, () => {
        const blanks = filterBlanks(values.nodeLists);

        expect(blanks).toEqual([document.querySelectorAll('xyz')]);

        blanks.forEach((value) => {
            expect(isBlank(value)).toEqual(true);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`❌ filled invoked object constructors !== ${KEY}`, () => {
        rejectBlanks(values.invokedConstructors).forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`✅ blank invoked object constructors === ${KEY}`, () => {
        const blanks = filterBlanks(values.invokedConstructors);

        expect(blanks).toEqual([String(), Array()]); // eslint-disable-line @typescript-eslint/no-array-constructor

        blanks.forEach((value) => {
            expect(isBlank(value)).toEqual(true);
        });
    });

    it(`❌ filled object instances !== ${KEY}`, () => {
        rejectBlanks(values.instances).forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`✅ blank object instances === ${KEY}`, () => {
        const blanks = filterBlanks(values.instances);

        expect(blanks).toEqual([
            new String(),
            new Array(), // eslint-disable-line @typescript-eslint/no-array-constructor
            new Map(),
            new Set(),
            new Float32Array(),
            new String(),
            new Map(),
            new Set(),
        ]);

        blanks.forEach((value) => {
            expect(isBlank(value)).toEqual(true);
        });
    });

    it(`❌ filled objects !== ${KEY}`, () => {
        rejectBlanks(values.objects).forEach((value) => {
            expect(isBlank(value)).toEqual(false);
        });
    });

    it(`✅ blank objects === ${KEY}`, () => {
        const blanks = filterBlanks(values.objects);

        expect(blanks).toEqual([Object(), new Object(), {}, Object.create({ a: 1, b: 2 }), Object.create(null)]);

        blanks.forEach((value) => {
            expect(isBlank(value)).toEqual(true);
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        it(`✅ blank ${key} === ${KEY}`, () => {
            filterBlanks(items).forEach((value) => {
                expect(isBlank(value)).toEqual(true);
            });
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        test(`isBlank() === _isBlank() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isBlank(value)).toEqual(_isBlank(value));
            });
        });
    });
});
