import Graph from "../Graph";
import BFSHelper from "../BFS/BFS";
import GraphVertex from "../Graph.vertex";

describe('Breadth first search', function () {
  it("Random generated (n=10) graph visited", () => {
    const n = 10;

    const graph = Graph.generateRandomGraph(n);
    const vertices = [...graph.getVertices().values()];

    for (let vertex of vertices) {
      if (vertex != vertices[0]) {
        vertex.connectTo(vertices[0]);
      }
    }

    const traverser = new BFSHelper(graph);
    const paths = traverser.traverse(vertices[0]).map(vertex => vertex.value)

    expect(paths.join('')).toBe('0123456789');
  });

  it("Deep graph traversed", () => {
    const graph = new Graph;
    const vertices = [];

    for (let i = 0; i < 10; i++) {
      const vertex = new GraphVertex(i);
      vertices.push(vertex);

      if (vertices.length > 1) vertex.connectTo(vertices[i - 1]);
    }

    const traverser = new BFSHelper(graph);

    expect(traverser.traverse(vertices[0]).map(vertex => vertex.value).join('')).toBe('0123456789');
    expect(traverser.traverse(vertices[9]).map(vertex => vertex.value).join('')).toBe('9876543210');
    expect(traverser.traverse(vertices[5]).map(vertex => vertex.value).join('')).toBe('5463728190');

    vertices[9].disconnectFrom(vertices[8]);
    expect(traverser.traverse(vertices[0]).map(vertex => vertex.value).join('')).toBe('012345678');
    expect(traverser.traverse(vertices[5]).map(vertex => vertex.value).join('')).toBe('546372810');

  });
});
