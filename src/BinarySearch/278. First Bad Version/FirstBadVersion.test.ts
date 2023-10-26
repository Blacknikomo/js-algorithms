import {firstBadVersion} from "./FirstBadVersion";

describe("FirstBadVersion", () => {
  it("Works", () => {
    const min = 0;
    const max = 100;
    const badStart = Math.random(min, max);
    const arr = Array.from({length: max}, (_, index) => index < badStart);

    expect(firstBadVersion([true, true, true, false])).toBe(3);
    expect(firstBadVersion(arr)).toBe(badStart);
  });
});
