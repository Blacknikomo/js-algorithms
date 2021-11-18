import {canSumBruteForce, canSumTopBottom} from "./CanSum";

describe("CanSum", () => {
  it("Brute force works", () => {
    expect(canSumBruteForce(7, [3,4,5])).toBeTruthy();
    expect(canSumBruteForce(7, [5])).toBeFalsy();
    expect(canSumBruteForce(7, [1])).toBeTruthy();
  });

  it("Top bottom works", () => {
    expect(canSumTopBottom(7, [3,4,5])).toBeTruthy();
    expect(canSumTopBottom(7, [5])).toBeFalsy();
    expect(canSumTopBottom(7, [1])).toBeTruthy();
    expect(canSumTopBottom(50, [1,2,3,70,50])).toBeTruthy();
  });
});
