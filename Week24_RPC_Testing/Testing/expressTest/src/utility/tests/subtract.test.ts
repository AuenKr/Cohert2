import { describe, it, expect } from '@jest/globals';
import { subtract } from '../index';

describe("subtract", () => {
    it('should return subtract of 1 and 3', () => {
        const finalAns = subtract(1, 3);
        expect(finalAns).toBe(-2);
    });

    it('should subtract the -ve number', () => {
        const finalAns = subtract(-1, -2)
        expect(finalAns).toBe(1);
    });

    it("subtract of two zero", ()=>{
        const finalAns = subtract(0, 0);
        expect(finalAns).toBe(0);
    })
})