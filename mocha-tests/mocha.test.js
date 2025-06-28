import { add, subtract, multiply, divide } from '../math.js';
import { expect } from 'chai';

describe('Math Functions', () => {
    it('add should return correct sum of two positive numbers', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('add should return correct sum of a positive and a negative number', () => {
        expect(add(5, -2)).to.equal(3);
    });

    it('add should return correct sum of two negative numbers', () => {
        expect(add(-5, -5)).to.equal(-10);
    });

    it('add should handle adding zero', () => {
        expect(add(5, 0)).to.equal(5);
        expect(add(0, 5)).to.equal(5);
    });

    it('subtract should return correct difference of two numbers', () => {
        expect(subtract(10, 5)).to.equal(5);
    });

    it('subtract should return correct result of subtracting zero', () => {
        expect(subtract(5, 0)).to.equal(5);
        expect(subtract(0, 5)).to.equal(-5);
    });

    it('subtract should return correct difference of two negative numbers', () => {
        expect(subtract(-10, -5)).to.equal(-5);
    });

    it('multiply should return correct product of two numbers', () => {
        expect(multiply(2, 3)).to.equal(6);
    });

    it('multiply should correctly handle multiplication with zero', () => {
        expect(multiply(0, 5)).to.equal(0);
        expect(multiply(5, 0)).to.equal(0);
    });

    it('multiply should return correct product of a positive and a negative number', () => {
        expect(multiply(5, -3)).to.equal(-15);
    });

    it('multiply should return correct product of two negative numbers', () => {
        expect(multiply(-4, -5)).to.equal(20);
    });

    it('divide should return correct quotient of two numbers', () => {
        expect(divide(10, 2)).to.equal(5);
    });

    it('divide should return correct quotient of a negative and a positive number', () => {
        expect(divide(-10, 2)).to.equal(-5);
    });

    it('divide should return correct quotient of two negative numbers', () => {
        expect(divide(-10, -2)).to.equal(5);
    });

    it('divide should throw an error when dividing by zero', () => {
        expect(() => divide(10, 0)).to.throw('Cannot divide by zero');
    });
});