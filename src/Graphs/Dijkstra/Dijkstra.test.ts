import Graph from "../Graph";
import Dijkstra from "./Dijkstra";
describe("Dijkstra", () => {
  const normalizeVertexIds = (input) => input.map(([v1, v2, weight]) => [v1 - 1, v2 - 1, weight]);
  // it("Network delay time #1", () => {
  //   const times = normalizeVertexIds([[2,1,1], [2,3,1], [3,4,1], [4,5,3]]);
  //   const n = 5;
  //   const graph = Graph.generateRandomGraph(n);
  //   times.forEach(([v1, v2, _]) => graph.addEdge(v1, v2, false));
  //
  //   const dijkstra = new Dijkstra(graph, times, ((k => k - 1))(2))
  //   const result = dijkstra.getMaxPathLength()
  //
  //
  //   expect(result).toBe(5);
  // });
  //
  // it("Network delay time #2", () => {
  //   const times = normalizeVertexIds([[2,1,1],[2,3,1],[3,4,1]]);
  //   const n = 4;
  //   const graph = Graph.generateRandomGraph(n);
  //   times.forEach(([v1, v2, _]) => graph.addEdge(v1, v2, false));
  //
  //   const dijkstra = new Dijkstra(graph, times, ((k => k - 1))(2))
  //   const result = dijkstra.getMaxPathLength()
  //
  //
  //   expect(result).toBe(2);
  // });
  //
  it("Network delay time #3", () => {
    const times = normalizeVertexIds([[1,2,1],[2,3,7],[1,3,4],[2,1,2]]);
    const n = 3;
    const graph = Graph.generateRandomGraph(n);
    times.forEach(([v1, v2, _]) => graph.addEdge(v1, v2, false));

    const dijkstra = new Dijkstra(graph, times, ((k => k - 1))(2))
    const result = dijkstra.getMaxPathLength()

    expect(result).toBe(6);
  });
});
