// noinspection DuplicatedCode

import Graph from "../Graph";
import DFSHelper, {Strategy} from "./DFS";
import vertices from "./DFS.test.data"

describe("Depth-first search", () => {
  it("Random graph generated. All edges connected and visited.", () => {
    const n = 6;
    const edges = [[0,1],[0,2],[3,5],[5,4],[4,3],[3,1]];
    const start = 3;

    const graph = Graph.generateRandomGraph(n);
    graph.applyEdges(edges);

    const traverser = new DFSHelper(graph);

    traverser.traverse(start, () => {})

    expect(traverser.getVisitedCount()).toBe(n);
  });

  it("3 Vertices cyclic graph visited.", () => {
    const n = 3;
    const edges = [[0,1],[1,2],[2,0]];
    const start = 0;
    const end = 2;

    const visited = [];
    const graph = Graph.generateRandomGraph(n);
    graph.applyEdges(edges);

    const traverser = new DFSHelper(graph);

    traverser.traverse(start, (node) => visited.push(node))
    const pathExists = visited.includes(start) && visited.includes(end);
    expect(pathExists).toBeTruthy();
  });

  it("2 graphs with 3 Vertices each. Path between graphs not found.", () => {
    const n = 6;
    const edges = [[0,1],[0,2],[3,5],[5,4],[4,3]];
    const start = 3;
    const end = 0;

    const visited = [];
    const graph = Graph.generateRandomGraph(n);
    graph.applyEdges(edges);

    const traverser = new DFSHelper(graph);

    traverser.traverse(start, (node) => visited.push(node))
    const pathExists = visited.includes(start) && visited.includes(end);
    expect(pathExists).toBeFalsy();
  });

  it("Many vertices. Path found. STACK strategy", () => {
    const n = 100000;
    const start = 59612;
    const end = 79883;

    const visited = [];

    const edges = vertices;
    const graph = Graph.generateRandomGraph(n);
    // O(E) * O(4V) -> O(4ev)
    graph.applyEdges(edges);

    const traverser = new DFSHelper(graph, Strategy.STACK);
    traverser.traverse(start, (node) => visited.push(node))
    const pathExists = visited.includes(start) && visited.includes(end);
    expect(pathExists).toBeTruthy();
  });

  // it("Many vertices. Path found. Recursive strategy", () => {
  //   const n = 100000;
  //   const start = 59612;
  //   const end = 79883;
  //
  //   const visited = [];
  //
  //   const edges = vertices;
  //   const graph = Graph.generateRandomGraph(n);
  //   // O(E) * O(4V) -> O(4ev)
  //   graph.applyEdges(edges);
  //
  //   const traverser = new DFSHelper(graph, Strategy.RECURSION);
  //   traverser.traverse(start, (node) => visited.push(node))
  //   const pathExists = visited.includes(start) && visited.includes(end);
  //   expect(pathExists).toBeTruthy();
  // });

  it("Many vertices. Path found. Simple DFS.", () => {
    const n = 100000;
    const start = 59612;
    const end = 79883;

    const edges = vertices;
    const graph = Graph.generateRandomGraph(n);
    // O(E) * O(4V) -> O(4ev)
    graph.applyEdges(edges);

    const traverser = new DFSHelper(graph);
    const paths = traverser.checkIfPathExists(start, end);

    expect(paths).toBeTruthy();
  });

  it("Find all paths from source to target", () => {
    const n = 6;
    const edges = [[0,1],[0,2],[3,5],[5,4],[4,3], [4, 2], [3, 1]];
    const start = 0;
    const end = 1;

    // @ts-ignore
    const graph = Graph.generateRandomGraph(n);
    graph.applyEdges(edges);
    const traverser = new DFSHelper(graph, Strategy.STACK);
    const paths = traverser.findPaths(start, end);

    console.log("Detected paths: ", paths);

    expect(paths.length).toBe(3);
  })
});
