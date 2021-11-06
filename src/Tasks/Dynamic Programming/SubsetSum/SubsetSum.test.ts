import {solveSubsetSumBottomUp, solveSubsetSumBruteForce, solveSubsetSumTopToBottom} from "./SubsetSum";

describe("SubsetSum", () => {
  it("Brute force works", () => {
    expect(solveSubsetSumBruteForce([1, 2, 3, 7], 6)).toBeTruthy();
    expect(solveSubsetSumBruteForce([1, 2, 1, 7, 5], 10)).toBeTruthy();
    expect(solveSubsetSumBruteForce([1, 3, 4, 8], 6)).toBeFalsy();
  });
  it("Top to bottom works", () => {
    expect(solveSubsetSumTopToBottom([1, 2, 3, 7], 6)).toBeTruthy();
    expect(solveSubsetSumTopToBottom([1, 2, 1, 7, 5], 10)).toBeTruthy();
    expect(solveSubsetSumTopToBottom([1, 3, 4, 8], 6)).toBeFalsy();
  });
  it("Bottom up works", () => {
    expect(solveSubsetSumBottomUp([1, 2, 3, 7], 6)).toBeTruthy();
    expect(solveSubsetSumBottomUp([1, 2, 1, 7, 5], 10)).toBeTruthy();
    expect(solveSubsetSumBottomUp([1, 3, 4, 8], 6)).toBeFalsy();
  });
});
