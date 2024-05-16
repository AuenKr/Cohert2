import { describe, expect, test, it } from '@jest/globals';
import { multiply, sum } from '../index';

describe('sum function', () => {
  it('should return sum of 1 and 3', () => {
    const finalAns = sum(1, 3);
    expect(finalAns).toBe(3);
  });

  it('should sum the -ve number', () => {
    const finalAns = sum(-1, -2)
    expect(finalAns).toBe(-3);
  });
});

describe('multiply function', ()=>{
  it('should retutrn multiply 1 and 3', ()=>{
    const finalAns = multiply(1, 3);
    expect(finalAns).toBe(3)
  })
  it('should return multiply of -ve number', ()=>{
    const finalAns = multiply(-1, -3);
    expect(finalAns).toBe(3);
  })
})