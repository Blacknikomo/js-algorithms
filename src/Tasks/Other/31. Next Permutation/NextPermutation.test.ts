import {nextPermutation} from "./NextPermutation";

describe("NextPermutation", () => {
  it("Works", () => {
    const arr1 = [1,2,3]
    nextPermutation(arr1);
    expect(arr1).toEqual([1,3,2])

    const arr2 = [1,3,2]
    nextPermutation(arr2);
    expect(arr2).toEqual([2,1,3])
  })
});
