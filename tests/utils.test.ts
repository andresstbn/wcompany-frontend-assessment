import { expect, test } from 'vitest'

const cardTestCases = [
    { number: '4539 1488 0343 6467', expected: true, type: 'Visa' },
    { number: '4485 2755 5763 1451', expected: false, type: 'Visa' },
    { number: '4716 1937 7167 9164', expected: true, type: 'Visa' },
    { number: '5298 6230 2782 9211', expected: false, type: 'Mastercard' },
    { number: '5404 9856 4343 2324', expected: true, type: 'Mastercard' },
];

test('luhnCheck', () => {
    for (const { number, expected } of cardTestCases) {
        const sanitizedNumber = number.replace(/[\s-]/g, '');
        expect(luhnCheck(sanitizedNumber)).toBe(expected)
    }
})

test('check is Visa or Mastercard', () => {
    for (const { number, type } of cardTestCases) {
        expect(validateCreditCard(number).cardType).toBe(type)
    }
})

