import {largestComponentSize} from "./Largest Component";

describe("Largest Component", () => {
  it("Calculated correctly", () => {
    // expect(largestComponentSize([4,6,15,35])).toBe(4);
    // expect(largestComponentSize([2,3,6,7,4,12,21,39])).toBe(8);
    expect(largestComponentSize([1,2,3,4,5,6,7,8,9])).toBe(6);
  });
});
