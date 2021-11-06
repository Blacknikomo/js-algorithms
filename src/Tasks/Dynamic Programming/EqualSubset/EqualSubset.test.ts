import {solveEqualSubsetBruteForce} from "./EqualSubset";

describe("EqualSubset", () => {
  it("Brute force works", () => {
    expect(solveEqualSubsetBruteForce([1, 2, 3, 4])).toBeTruthy();
    expect(solveEqualSubsetBruteForce([1, 1, 3, 4, 7])).toBeTruthy();
    expect(solveEqualSubsetBruteForce([2, 3, 4, 6])).toBeFalsy();
  });
});
