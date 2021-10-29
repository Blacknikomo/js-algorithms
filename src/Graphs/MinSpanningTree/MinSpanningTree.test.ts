import Kruskals from "./Kruskals";

describe("Min spanning tree algorithms", () => {
  it("Kruskal's algorithm #1", () => {
    const vertices = [[0,0],[2,2],[3,10],[5,2],[7,0]];
    const kruskals = new Kruskals(vertices);
    expect(kruskals.getMinCost()).toBe(20);
  });

  it("Kruskal's algorithm #2", () => {
    const vertices = [[3,12],[-2,5],[-4,1]];
    const kruskals = new Kruskals(vertices);
    expect(kruskals.getMinCost()).toBe(18);
  });

  it("Kruskal's algorithm #3", () => {
    const vertices = [[0,0],[1,1],[1,0],[-1,1]];
    const kruskals = new Kruskals(vertices);
    expect(kruskals.getMinCost()).toBe(4);
  });

  it("Kruskal's algorithm #4", () => {
    const vertices = [[-1000000,-1000000],[1000000,1000000]];
    const kruskals = new Kruskals(vertices);
    expect(kruskals.getMinCost()).toBe(4000000);
  });

  it("Kruskal's algorithm #5", () => {
    const vertices = [[0,0]];
    const kruskals = new Kruskals(vertices);
    expect(kruskals.getMinCost()).toBe(0);
  });

  it("Kruskal's algorithm #5", () => {
    const vertices = [[2,-3],[-17,-8],[13,8],[-17,-15]];
    const kruskals = new Kruskals(vertices);
    expect(kruskals.getMinCost()).toBe(53);
  });
})
