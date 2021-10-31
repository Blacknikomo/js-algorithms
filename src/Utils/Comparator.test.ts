import Comparator from "./Comparator";

describe("Comparator function", () => {
  const comparator = new Comparator();
  it("Less", () => expect(comparator.less(1, 2)).toBe(true));
  it("Greater", () => expect(comparator.greater(2, 1)).toBe(true));
  it("Equal", () => expect(comparator.equal(2, 2)).toBe(true));

  it("Less or Equal #1", () => expect(comparator.lessOrEqualThan(1, 2)).toBe(true));
  it("Less or Equal #2", () => expect(comparator.lessOrEqualThan(2, 2)).toBe(true));

  it("Greater or Equal #1", () => expect(comparator.greaterOrEqualThan(2, 1)).toBe(true));
  it("Greater or Equal #2", () => expect(comparator.greaterOrEqualThan(2, 2)).toBe(true));
});
