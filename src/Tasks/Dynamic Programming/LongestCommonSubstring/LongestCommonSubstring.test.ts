import {longestCommonSubsequence} from "./LongestCommonSubstring";

describe("Longest common substring", () => {
  it("Found in short names", () => {
    expect(longestCommonSubsequence("abcde", "ace")).toBe(3);
    expect(longestCommonSubsequence("baftg", "aftba")).toBe(3);
  });
  it("Found in long names", () => {
    expect(longestCommonSubsequence("mhunuzqrkzsnidwbun", "szulspmhwpazoxijwbq")).toBe(6);
  });
})
