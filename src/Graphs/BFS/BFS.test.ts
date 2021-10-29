import Graph from "../Graph";
import BFSHelper from "../BFS/BFS";

describe('Breadth first search', function () {
  it("All vertices visited", () => {
    const n = 6;
    const edges = [[0,1],[0,2],[3,5],[5,4],[4,3],[3,1]];
    const start = 3;

    const graph = Graph.generateRandomGraph(n);
    graph.applyEdges(edges);

    const traverser = new BFSHelper(graph);
    const paths = traverser.traverse(start)

    expect(paths.join('')).toBe('354102');
  });
});
