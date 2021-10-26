import DisjointSet from "./DisjointSet";
import Provinces from "./tasks/Provinces";
import ValidTree from "./tasks/DetectTree";
import earliestAcq from "./tasks/TheEarliestMomentOfAcquaintance";

describe("Disjoint Sets tests.", () => {
  const set = new DisjointSet();
  const elementsNumber = 10;

  beforeAll(() => {
    new Array(elementsNumber)
      .fill(null)
      .map((_, index) => set.add(index))
  })

  test("Class instance created", () => {
    expect(set).toBeInstanceOf(DisjointSet);
  })
  it("Instance contains 10 elements", () => {
    expect(set.root.length).toBe(elementsNumber);
  })
  it("Initial find returns root", () => {
    expect(set.find(1)).toBe(1);
    expect(set.find(5)).toBe(5);
  })
  it("Initial items disconnected", () => {
    expect(set.connected(1, 2)).toBeFalsy();
  })
  it("Union connects items", () => {
    set.union(0, 1);
    set.union(1, 2);
    set.union(2, 3);
    set.union(4, 3);
    set.union(5, 9);
    set.union(8, 9);
    set.union(7, 6);
    expect(set.connected(0, 3)).toBeTruthy();
  })
  it("Union doesn't connect unnecessary items", () => {
    expect(set.connected(5, 2)).toBeFalsy();
  })
})

describe("Provinces task", () => {
  it("1 Province detected", () => {
    const input = [
      [1,1,1,0,1,1,1,0,0,0],
      [1,1,0,0,0,0,0,1,0,0],
      [1,0,1,0,0,0,0,0,0,0],
      [0,0,0,1,1,0,0,0,1,0],
      [1,0,0,1,1,0,0,0,0,0],
      [1,0,0,0,0,1,0,0,0,0],
      [1,0,0,0,0,0,1,0,1,0],
      [0,1,0,0,0,0,0,1,0,1],
      [0,0,0,1,0,0,1,0,1,1],
      [0,0,0,0,0,0,0,1,1,1]
    ];
    const provinces = new Provinces(input)
    expect(provinces.analyze()).toBe(1);
  })

  it("2 Provinces detected", () => {
    const input = [[1,1,0],[1,1,0],[0,0,1]];
    const provinces = new Provinces(input)
    expect(provinces.analyze()).toBe(2);
  })

  it("2 Provinces detected #2", () => {
    const input = [
      [1,0,0,1],
      [0,1,1,0],
      [0,1,1,1],
      [1,0,1,1]
    ];
    const provinces = new Provinces(input)
    expect(provinces.analyze()).toBe(1);
  })

  it("3 Provinces detected", () => {
    const input = [[1,0,0],[0,1,0],[0,0,1]];
    const provinces = new Provinces(input)
    expect(provinces.analyze()).toBe(3);
  })
})

describe("Detect tree task", () => {
  it("Tree positively detected", () => {
    const n = 5;
    const edges = [[0,1],[0,2],[0,3],[1,4]];

    expect(ValidTree(n, edges)).toBe(true);
  })

  it("Tree positively not detected #1", () => {
    const n = 5;
    const edges = [[0,1],[1,2],[2,3],[1,3],[1,4]];
    expect(ValidTree(n, edges)).toBe(false);
  })

  it("Tree positively not detected #2", () => {
    const n = 5;
    const edges = [[0,1],[2,1],[2,0],[2,4]];
    expect(ValidTree(n, edges)).toBe(false);
  })

  it("Tree positively not detected #3", () => {
    const n = 4;
    const edges = [[0,1],[2,3]];
    expect(ValidTree(n, edges)).toBe(false);
  })
})

describe("Earliest acquaintance", () => {
  it ("Detects 20190301", () => {
    const logs = [
      [20190101,0,1],
      [20190104,3,4],
      [20190107,2,3],
      [20190211,1,5],
      [20190224,2,4],
      [20190301,0,3],
      [20190312,1,2],
      [20190322,4,5]
    ]
    const n = 6

    expect(earliestAcq(logs, n)).toBe(20190301)
  })
})
