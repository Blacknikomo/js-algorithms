import {liquidVolume, liquidVolume2Pointers} from "./Liquid Volume";

describe("Liquid Volume", () => {
  it("Brute force works:", () => {
    expect(liquidVolume([1,8,6,2,5,4,8,3,7])).toBe(49);
    expect(liquidVolume([1,1])).toBe(1);
    expect(liquidVolume([4,3,2,1,4])).toBe(16);
    expect(liquidVolume([1,2,1])).toBe(2);
  });

  it("Calculate with positions", () => {
    expect(liquidVolume2Pointers([1,8,6,2,5,4,8,3,7])).toBe(49);
    expect(liquidVolume2Pointers([1,1])).toBe(1);
    expect(liquidVolume2Pointers([4,3,2,1,4])).toBe(16);
    expect(liquidVolume2Pointers([1,2,1])).toBe(2);
  });
});
