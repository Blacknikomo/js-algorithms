import Graph from "../Graph";
import Dijkstra from "./Dijkstra";

describe("Dijkstra", () => {
  it("Network delay time #1", () => {
    const n = 10;
    const graph = Graph.generateRandomGraph(n, true);
    const vertices = [...graph.getVertices().values()];
    // const times = [[1,2,1], [2,4,5], [1,3,1], [3,4,7]];
    const times = [
      [2,1,1], [2,3,1], [2,6,7], [2,7,1],
      [3,4,2],
      [4,5,3],
      [6,5,1],
      [7,8,1],[7,4,1],
      [8,9,1],
      [9,10,3],
      [10,5,3]
    ];

    times.forEach(([v1, v2, weight]) => graph.addEdge(vertices[v1 - 1], vertices[v2 - 1], weight));

    const dijkstra = new Dijkstra(graph)
    const result = dijkstra.getShortestPath(vertices[1], vertices[4]);

    expect(result).toBe(5);
  });

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
  // it("Network delay time #3", () => {
  //   const times = normalizeVertexIds([[1,2,1],[2,3,7],[1,3,4],[2,1,2]]);
  //   const n = 3;
  //   const graph = Graph.generateRandomGraph(n);
  //   times.forEach(([v1, v2, _]) => graph.addEdge(v1, v2, false));
  //
  //   const dijkstra = new Dijkstra(graph, times, ((k => k - 1))(2))
  //   const result = dijkstra.getMaxPathLength()
  //
  //   expect(result).toBe(6);
  // });
  //
  //
  // it("Network delay time #4", () => {
  //   const times = normalizeVertexIds([[1,5,66],[3,5,55],[4,3,29],[1,2,9],[3,4,10],[3,1,3],[2,3,78],[1,4,98],[4,5,21],[5,2,19],[5,1,76],[4,1,65],[3,2,27],[5,3,23],[5,4,12],[2,1,36],[4,2,75],[2,4,11],[1,3,30],[2,5,8]]
  //   );
  //   const n = 5;
  //   const graph = Graph.generateRandomGraph(n);
  //   times.forEach(([v1, v2, _]) => graph.addEdge(v1, v2, false));
  //
  //   const dijkstra = new Dijkstra(graph, times, ((k => k - 1))(1))
  //   const result = dijkstra.getMaxPathLength()
  //
  //   expect(result).toBe(30);
  // });
});
