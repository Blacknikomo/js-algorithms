import {solveKnapsackBottomUp, solveKnapsackBrute, solveKnapsackTopToBottom} from "./Sack";

describe("Knapsack issue", () => {
  it("Brute force works", () => {
    expect(solveKnapsackBrute([1, 6, 10, 16], [1, 2, 3, 5], 7)).toBe(22);
    expect(solveKnapsackBrute([1, 6, 10, 16], [1, 2, 3, 5], 6)).toBe(17);
    expect(solveKnapsackBrute([8, 13, 10, 16], [1, 2, 3, 5], 6)).toBe(31);
  });

  it("Top to bottom", () => {
    expect(solveKnapsackTopToBottom([1, 6, 10, 16], [1, 2, 3, 5], 7)).toBe(22);
    expect(solveKnapsackTopToBottom([1, 6, 10, 16], [1, 2, 3, 5], 6)).toBe(17);
    expect(solveKnapsackTopToBottom([8, 13, 10, 16], [1, 2, 3, 5], 6)).toBe(31);
  });

  it("Bottom - up ", () => {
    expect(solveKnapsackBottomUp([1, 6, 10, 16], [1, 2, 3, 5], 7)).toBe(22);
    expect(solveKnapsackBottomUp([1, 6, 10, 16], [1, 2, 3, 5], 6)).toBe(17);
    expect(solveKnapsackBottomUp([8, 13, 10, 16], [1, 2, 3, 5], 6)).toBe(31);
  });
});

