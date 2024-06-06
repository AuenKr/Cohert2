import { describe, it, expect } from '@jest/globals';
import { sum } from '../index';

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