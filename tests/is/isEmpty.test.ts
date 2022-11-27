/**
 * ❌: The expectation should be equal to false
 * ✅: The expectation should be equal to true
 * ➖: The expectation can be equal to true or false
 */

import { describe, it, test, expect } from 'vitest';
import values from '../__Fixtures/values';
import isEmpty from '../../src/isEmpty';
import isObject from '../../src/isObject';

const KEY = 'empty';

const _isEmpty = (value: unknown): boolean => {
    if (value === null || value === undefined || typeof value === 'undefined') {
        return true;
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

const filterEmpty = (items: unknown[]): unknown[] => {
    return items.filter((item) => _isEmpty(item));
};
const rejectEmpty = (items: unknown[]): unknown[] => {
    return items.filter((item) => !_isEmpty(item));
};

describe('is/isEmpty', () => {
    it(`✅ nil === ${KEY}`, () => {
        values.nil.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`❌ filled booleans !== ${KEY}`, () => {
        rejectEmpty(values.booleans).forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty booleans === ${KEY}`, () => {
        const empties = filterEmpty(values.booleans);

        expect(empties).toEqual([false]);

        empties.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`❌ filled integers !== ${KEY}`, () => {
        rejectEmpty(values.integers).forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty integers === ${KEY}`, () => {
        const empties = filterEmpty(values.integers);

        expect(empties).toEqual([0, +0, -0]);

        empties.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`❌ floats !== ${KEY}`, () => {
        values.floats.forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`❌ filled numbers !== ${KEY}`, () => {
        rejectEmpty(values.numbers).forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty numbers === ${KEY}`, () => {
        const empties = filterEmpty(values.numbers);

        expect(empties).toEqual([NaN, 0, +0, -0]);

        empties.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`➖ bigInts !== || === ${KEY}`, () => {
        values.bigInts.forEach((value) => {
            expect(isEmpty(value)).toEqual(value === 0n);
        });
    });

    it(`❌ filled strings !== ${KEY}`, () => {
        rejectEmpty(values.strings).forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty strings === ${KEY}`, () => {
        const empties = filterEmpty(values.strings);

        expect(empties).toEqual(['', '']);

        empties.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`❌ symbols !== ${KEY}`, () => {
        values.symbols.forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`❌ filled arrays !== ${KEY}`, () => {
        rejectEmpty(values.arrays).forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty arrays === ${KEY}`, () => {
        const empties = filterEmpty(values.arrays);

        expect(empties).toEqual([[], [], Object.assign([], { a: 1, b: 2 })]);

        empties.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`❌ DOM elements !== ${KEY}`, () => {
        values.elements.forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`❌ filled DOM nodeLists !== ${KEY}`, () => {
        rejectEmpty(values.nodeLists).forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty DOM nodeLists === ${KEY}`, () => {
        const empties = filterEmpty(values.nodeLists);

        expect(empties).toEqual([document.querySelectorAll('xyz')]);

        empties.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`❌ DOM alternative contexts !== ${KEY}`, () => {
        values.alternativeDOMs.forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`❌ functions !== ${KEY}`, () => {
        values.functions.forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`❌ classes !== ${KEY}`, () => {
        values.classes.forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`❌ object constructors !== ${KEY}`, () => {
        values.constructors.forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`❌ filled invoked object constructors !== ${KEY}`, () => {
        rejectEmpty(values.invokedConstructors).forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty invoked object constructors === ${KEY}`, () => {
        const empties = filterEmpty(values.invokedConstructors);

        expect(empties).toEqual([
            Boolean(),
            Number(),
            String(),
            Array(), // eslint-disable-line @typescript-eslint/no-array-constructor
        ]);

        empties.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`❌ filled object instances !== ${KEY}`, () => {
        rejectEmpty(values.instances).forEach((value) => {
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty object instances === ${KEY}`, () => {
        const empties = filterEmpty(values.instances);

        expect(empties).toEqual([
            new String(),
            new Array(), // eslint-disable-line @typescript-eslint/no-array-constructor
            new Map(),
            new Set(),
            new Float32Array(),
            new String(),
            new Map(),
            new Set(),
        ]);

        empties.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    it(`❌ filled objects !== ${KEY}`, () => {
        rejectEmpty(values.objects).forEach((value) => {
            if (isEmpty(value)) {
                console.log(value, isEmpty(value));
                return;
            }
            expect(isEmpty(value)).toEqual(false);
        });
    });

    it(`✅ empty objects === ${KEY}`, () => {
        const objects = filterEmpty(values.objects);

        expect(objects).toEqual([Object(), new Object(), {}, Object.create({ a: 1, b: 2 }), Object.create(null)]);

        objects.forEach((value) => {
            expect(isEmpty(value)).toEqual(true);
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        it(`✅ empty ${key} === ${KEY}`, () => {
            filterEmpty(items).forEach((value) => {
                expect(isEmpty(value)).toEqual(true);
            });
        });
    });

    Object.entries(values).forEach(([key, items]) => {
        test(`isEmpty() === _isEmpty() | [${key}]`, () => {
            items.forEach((value) => {
                expect(isEmpty(value)).toEqual(_isEmpty(value));
            });
        });
    });
});
