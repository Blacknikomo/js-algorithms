import Graph from "../Graph";
import DFSHelper, {Strategy} from "./DFS";
import GraphVertex from "../Graph.vertex";

describe("Depth-first search", () => {
  it("Recursion DFS works.", () => {
    const n = 10;
    const graph = Graph.generateRandomGraph(n);
    const traverser = new DFSHelper(graph);

    const vertices = [...graph.getVertices().values()];

    for (let vertex of vertices) {
      if (vertex != vertices[0]) {
        vertex.connectTo(vertices[0]);
      }
    }

    let visited = 0;
    traverser.traverse(vertices[0], () => visited += 1)

    expect(visited).toBe(n);
  });

  it("Stack-based DFS works.", () => {
    const n = 10;
    const graph = Graph.generateRandomGraph(n);
    const traverser = new DFSHelper(graph, Strategy.STACK);

    const vertices = [...graph.getVertices().values()];

    for (let vertex of vertices) {
      if (vertex != vertices[0]) {
        vertex.connectTo(vertices[0]);
      }
    }

    let visited = 0;
    traverser.traverse(vertices[0], () => visited += 1)
    expect(visited).toBe(n);
  });


  it("Deep graph traversed", () => {
    const graph = new Graph;
    const vertices = [];

    for (let i = 0; i < 10; i++) {
      const vertex = new GraphVertex(i);
      vertices.push(vertex);

      if (vertices.length > 1) vertex.connectTo(vertices[i - 1]);
    }

    const traverser = new DFSHelper(graph);

    let indices = [];
    const resetVisits = () => indices = [];
    const visit = (node) => indices.push(node.value);

    traverser.traverse(vertices[0], visit)
    expect(indices.join('')).toBe('0123456789');
    resetVisits();
    traverser.traverse(vertices[5], visit)
    expect(indices.join('')).toBe('5432106789');
    resetVisits();
    traverser.traverse(vertices[9], visit)
    expect(indices.join('')).toBe('9876543210');
  });
  it("Many vertices. Path found. Simple DFS.", () => {
    const graph = new Graph;
    const vertices = [];

    for (let i = 0; i < 10; i++) {
      const vertex = new GraphVertex(i);
      vertices.push(vertex);

      if (vertices.length > 1) vertex.connectTo(vertices[i - 1]);
    }

    const traverser = new DFSHelper(graph);
    const paths = traverser.checkIfPathExists(vertices[0], vertices[9]);

    expect(paths).toBeTruthy();
  });

  it("Find all paths from source to target", () => {
    const graph = new Graph;
    const vertices = [];

    for (let i = 0; i < 5; i++) {
      const vertex = new GraphVertex(i);
      vertices.push(vertex);

      if (vertices.length > 1) vertex.connectTo(vertices[i - 1]);
    }

    const traverser = new DFSHelper(graph);

    expect(traverser.findPaths(vertices[0], vertices[4]).length).toBe(1);

    vertices[1].connectTo(vertices[3]);
    vertices[1].connectTo(vertices[4]);
    expect(traverser.findPaths(vertices[0], vertices[4]).length).toBe(3);
  });
});
