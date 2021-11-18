import {howSumBruteForce} from "./HowSum";

describe("HowSum", () => {
  it("Brute force works", () => {
    const result = howSumBruteForce(7, [1, 2, 3, 4]);
    expect(result).toBeTruthy()
  });
});
