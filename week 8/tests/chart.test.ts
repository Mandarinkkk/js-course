import { describe, it, expect } from 'vitest';
import { maxWater, checkNonNegativity, checkDataType } from '../src/chart'; // Replace with the actual file path

describe('maxWater', () => {
  it('should return the correct maximum water volume for the given height array', () => {
    expect(maxWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49); // Example test case
    expect(maxWater([1, 1])).toBe(1); // Minimum case with two heights
    expect(maxWater([4, 3, 2, 1, 4])).toBe(16); // Another example case
  });

  it('should return 0 if the height array is empty', () => {
    expect(maxWater([])).toBe(0); // Edge case: empty array
  });
});

describe('checkNonNegativity', () => {
  it('should return true if all heights are non-negative', () => {
    expect(checkNonNegativity([1, 2, 3, 4, 0])).toBe(true); // All heights are >= 0
  });

  it('should return false if any height is negative', () => {
    expect(checkNonNegativity([1, 2, -3, 4])).toBe(false); // One negative height
    expect(checkNonNegativity([0, -1, 2])).toBe(false); // Negative value in the array
  });
});

describe('checkDataType', () => {
  it('should return true if all heights can be converted to numbers', () => {
    expect(checkDataType(['1', '2', '3', '4'])).toBe(true); // Valid numbers in string format
  });

  it('should return false if any height cannot be converted to a number', () => {
    expect(checkDataType(['1', '2', 'abc', '4'])).toBe(false); // 'abc' cannot be converted to a number
    expect(checkDataType(['1', 'NaN', '3'])).toBe(false); // 'NaN' should return false
  });
});
