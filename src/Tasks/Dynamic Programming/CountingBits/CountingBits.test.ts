import {countingBits} from "./CountingBits";

describe("CountingBits", () => {
  it("Works", () => {
    expect(countingBits(2)).toEqual([0, 1, 1])
    expect(countingBits(5)).toEqual([0,1,1,2,1,2])
    // expect(countingBits(85723)).toEqual([0,1,1,2,1,2])
  })

});
