import { describe, expect, it } from "@jest/globals";
import { square } from "..";

describe("square", () => {
    it('should retutrn square 3', ()=>{
        const finalAns = square(3);
        expect(finalAns).toBe(9)
      })
      it('should return square of -ve number', ()=>{
        const finalAns = square(-3);
        expect(finalAns).toBe(9);
      })
})