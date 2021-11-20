import {howSumBruteForce, howSumTopBottom} from "./HowSum";

describe("HowSum", () => {
  it("Brute force works", () => {
    const result = howSumBruteForce(7, [1, 2, 3, 4]);
    expect(result).toBeTruthy()
  });

  it("Memoization works", () => {
    const result = howSumTopBottom(7, [1, 2, 3, 4]);
    expect(result).toBeTruthy()


    const result2 = howSumTopBottom(25, [2, 3, 4, 6, 9]);
    expect(result2).toBeTruthy()
  });
});
