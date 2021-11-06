import {fib, fibBottomUp} from "./Fibonacci";

describe("Fibonacci", () => {
  it("Fibonacci Top-to-bottom works", () => {
    expect(fib(5)).toBe(5);
    expect(fib(6)).toBe(8);
    expect(fib(7)).toBe(13);
    expect(fib(100)).toBe(354224848179262000000);
  })

  it("Fibonacci bottom-up works", () => {
    expect(fibBottomUp(5)).toBe(5);
    expect(fibBottomUp(6)).toBe(8);
    expect(fibBottomUp(7)).toBe(13);
    expect(fibBottomUp(100)).toBe(354224848179262000000);
  })
})
