import {threeSum} from "./3Sum";

describe("3Sum", () => {
  it("Three sum works", () => {
    expect(threeSum([-1,-3,4])).toEqual([[-3,4,-1]])
    expect(threeSum([-1,-3,4, -1, -5, 6])).toEqual([[-1,-3,4]])
    // expect(threeSum([-1,-3,-1,-3,4])).toEqual([[-1,-3,4]])
    // expect(threeSum([0,0,0,0])).toEqual([[0,0,0]])
    // expect(threeSum([-2,0,0,2,2])).toEqual([[-2,0,2]])
    // expect(threeSum([-1,0,1,2,-1,-4])).toEqual([[-1,-1,2],[-1,0,1]])
  });
});
