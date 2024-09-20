// A calculator object test

import calculator from './calculator';

test('adds two number', () => {
    expect(calculator.add(3, 5)).toBe(8);
});

test('subtracts two numbers', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('divides two number', () => {
    expect(calculator.divide(6, 2)).toBe(3);
});

test('multiplies two numbers', () => {
    expect(calculator.multiply(7, 9)).toBe(63);
});
