import {gridTravelerBruteForce, gridTravelerTopDown} from "./GridTraveler";

describe("Grid traveler", () => {
  it("Brute force works", () => {
    expect(gridTravelerBruteForce(3, 3)).toBe(6);
    expect(gridTravelerBruteForce(5, 5)).toBe(70);
    expect(gridTravelerBruteForce(10, 10)).toBe(48620);
  });

  it("Top to bottom works", () => {
    expect(gridTravelerTopDown(3, 3)).toBe(6);
    expect(gridTravelerTopDown(5, 5)).toBe(70);
    expect(gridTravelerTopDown(10, 10)).toBe(48620);
    expect(gridTravelerTopDown(40, 40)).toBeGreaterThan(48620000);
  });
})
