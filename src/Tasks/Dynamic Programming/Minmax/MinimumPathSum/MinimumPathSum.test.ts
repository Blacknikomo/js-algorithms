import {minimumPathSum} from "./MinimumPathSum";

describe("MinimumPathSum", () => {
  it("Works", () => {
    expect(minimumPathSum([[1,3,1],[1,5,1],[4,2,1]])).toBe(7)
    expect(minimumPathSum([[1,2,3],[4,5,6]])).toBe(12)
  })
});
