import {twoSum} from "./2Sum";

describe("2Sum", () => {
  it("Sum properly calculated", () => {
    expect(twoSum([2,7,11,15], 9)).toEqual([[0,1]])
    expect(twoSum([15,7,2,11], 9)).toEqual([[2,1]])
    expect(twoSum([15,7,2,7,2,11], 9)).toEqual([[4,3],[2,1]])
  })
});
