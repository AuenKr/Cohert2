import { describe, expect, it } from "@jest/globals";
import { multiply } from "..";

describe("multiply", () => {
    it('should retutrn multiply 1 and 3', ()=>{
        const finalAns = multiply(1, 3);
        expect(finalAns).toBe(3)
      })
      it('should return multiply of -ve number', ()=>{
        const finalAns = multiply(-1, -3);
        expect(finalAns).toBe(3);
      })
})