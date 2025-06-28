import { add, subtract, multiply, divide } from '../math.js';

describe('Math Functions', () => {
    test('add should return correct sum of two positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('add should return correct sum of a positive and a negative number', () => {
        expect(add(5, -2)).toBe(3);
    });

    test('add should return correct sum of two negative numbers', () => {
        expect(add(-5, -5)).toBe(-10);
    });

    test('add should handle adding zero', () => {
        expect(add(5, 0)).toBe(5);
        expect(add(0, 5)).toBe(5);
    });

    test('subtract should return correct difference of two numbers', () => {
        expect(subtract(10, 5)).toBe(5);
    });

    test('subtract should return correct result of subtracting zero', () => {
        expect(subtract(5, 0)).toBe(5);
        expect(subtract(0, 5)).toBe(-5);
    });

    test('subtract should return correct difference of two negative numbers', () => {
        expect(subtract(-10, -5)).toBe(-5);
    });

    test('multiply should return correct product of two numbers', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('multiply should correctly handle multiplication with zero', () => {
        expect(multiply(0, 5)).toBe(0);
        expect(multiply(5, 0)).toBe(0);
    });

    test('multiply should return correct product of a positive and a negative number', () => {
        expect(multiply(5, -3)).toBe(-15);
    });

    test('multiply should return correct product of two negative numbers', () => {
        expect(multiply(-4, -5)).toBe(20);
    });

    test('divide should return correct quotient of two numbers', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('divide should return correct quotient of a negative and a positive number', () => {
        expect(divide(-10, 2)).toBe(-5);
    });

    test('divide should correctly handle division of two negative numbers', () => {
        expect(divide(-10, -2)).toBe(5);
    });

    test('divide should throw an error when dividing by zero', () => {
        expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
    });
});