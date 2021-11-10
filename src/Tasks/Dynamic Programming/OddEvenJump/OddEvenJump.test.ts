import {oddEvenJumps} from "./OddEvenJump";

describe("Odd Even jump", () => {
  it("Dynamic programming top-to-bottom", () => {
    expect(oddEvenJumps([10,13,12,14,15])).toBe(2);
    expect(oddEvenJumps([2,3,1,1,4])).toBe(3);
  });
})
