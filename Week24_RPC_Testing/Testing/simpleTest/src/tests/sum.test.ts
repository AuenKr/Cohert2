import { describe, it, expect } from '@jest/globals';
import { multiply, sum } from '../index';

describe("sum", () => {
    it('should return sum of 1 and 3', () => {
        const finalAns = sum(1, 3);
        expect(finalAns).toBe(4);
    });

    it('should sum the -ve number', () => {
        const finalAns = sum(-1, -2)
        expect(finalAns).toBe(-3);
    });

    it("sum of two zero", ()=>{
        const finalAns = sum(0, 0);
        expect(finalAns).toBe(0);
    })
})

describe("multiply", () => {
    it("multiply 2 and 3", () => {
        const finalAns = multiply(2, 3);
        expect(finalAns).toBe(6);
    })
})