import { expect, test } from 'vitest'


test('formatCOP', () => {
  const testPairs: [number, string][] = [
    [100, '$\xa0100'],
    [1034, '$\xa01.034'],
    [10234, '$\xa010.234'],
    [900000, '$\xa0900.000'],
    [435_394_100, '$\xa0435.394.100'],
  ]
  for (const [input, expected] of testPairs) {
    expect(formatCOP(input)).toBe(expected)
  }
})