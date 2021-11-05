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

  it('should compare with default comparator function', () => {
    const comparator = new Comparator();

    expect(comparator.equal(0, 0)).toBe(true);
    expect(comparator.equal(0, 1)).toBe(false);
    expect(comparator.equal('a', 'a')).toBe(true);
    expect(comparator.less(1, 2)).toBe(true);
    expect(comparator.less(-1, 2)).toBe(true);
    expect(comparator.less('a', 'b')).toBe(true);
    expect(comparator.less('a', 'ab')).toBe(true);
    expect(comparator.less(10, 2)).toBe(false);
    expect(comparator.lessOrEqualThan(10, 2)).toBe(false);
    expect(comparator.lessOrEqualThan(1, 1)).toBe(true);
    expect(comparator.lessOrEqualThan(0, 0)).toBe(true);
    expect(comparator.greater(0, 0)).toBe(false);
    expect(comparator.greater(10, 0)).toBe(true);
    expect(comparator.greaterOrEqualThan(10, 0)).toBe(true);
    expect(comparator.greaterOrEqualThan(10, 10)).toBe(true);
    expect(comparator.greaterOrEqualThan(0, 10)).toBe(false);
  });

  it('should compare with custom comparator function', () => {
    const comparator = new Comparator<string>((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    expect(comparator.equal('a', 'b')).toBe(true);
    expect(comparator.equal('a', '')).toBe(false);
    expect(comparator.less('b', 'aa')).toBe(true);
    expect(comparator.greaterOrEqualThan('a', 'aa')).toBe(false);
    expect(comparator.greaterOrEqualThan('aa', 'a')).toBe(true);
    expect(comparator.greaterOrEqualThan('a', 'a')).toBe(true);

    comparator.reverse();

    expect(comparator.equal('a', 'b')).toBe(true);
    expect(comparator.equal('a', '')).toBe(false);
    expect(comparator.less('b', 'aa')).toBe(false);
    expect(comparator.greaterOrEqualThan('a', 'aa')).toBe(true);
    expect(comparator.greaterOrEqualThan('aa', 'a')).toBe(false);
    expect(comparator.greaterOrEqualThan('a', 'a')).toBe(true);
  });

});
