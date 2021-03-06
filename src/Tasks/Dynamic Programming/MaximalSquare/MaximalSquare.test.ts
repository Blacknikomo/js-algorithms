import {maximalSquare} from "./MaximalSquare";

describe("Maximal square", () => {
  it("Works", () => {
    expect(maximalSquare(
      [
        ["1","0","1","0","0"],
        ["1","0","1","1","1"],
        ["1","1","1","1","1"],
        ["1","0","0","1","0"]
      ]
    )).toBe(4);
    expect(maximalSquare([["0","1"],["1","0"]])).toBe(1);
    expect(maximalSquare([["0"]])).toBe(0);
  })
});
