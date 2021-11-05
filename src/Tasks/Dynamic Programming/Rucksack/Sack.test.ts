import {solveKnapsackBrute} from "./Sack";

describe("Knapsack issue", () => {
  it("Input #1.", () => {
    const profits = [1, 6, 10, 16];
    const weights = [1, 2, 3, 5];
    const capacity = 7;

    expect(solveKnapsackBrute(profits, weights, capacity)).toBe(22);
  });

  it("Input #2.", () => {
    const profits = [1, 6, 10, 16];
    const weights = [1, 2, 3, 5];
    const capacity = 6;

    expect(solveKnapsackBrute(profits, weights, capacity)).toBe(17);
  });

  it("Input #3.", () => {
    const profits = [8, 13, 10, 16];
    const weights = [1, 1, 2, 5];
    const capacity = 6;

    expect(solveKnapsackBrute(profits, weights, capacity)).toBe(31);
  });
});
