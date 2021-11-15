import {twoSum} from "./2Sum";

describe("2Sum", () => {
  it("Sum properly calculated", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([[0,1]])
    expect(twoSum([-2,2,7,11,15,-2], 9)).toEqual([[0,3],[1,2]].sort((a, b) => a[0] - b[0]))
  })
});
