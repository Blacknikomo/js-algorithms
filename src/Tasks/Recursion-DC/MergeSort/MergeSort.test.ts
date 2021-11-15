import {mergeSortBottomUp, mergeSortTopToBottom} from "./MergeSort";

describe("Merge sort works", () => {
  it("Top to bottom works", () => {
    expect(mergeSortTopToBottom([5,2,3,1])).toEqual([5,2,3,1].sort());
  });

  it("Top to bottom works", () => {
    expect(mergeSortBottomUp([5,2,3,1])).toEqual([5,2,3,1].sort());
  });
})
