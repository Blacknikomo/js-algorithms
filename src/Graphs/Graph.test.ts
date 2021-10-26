import Graph from "./Graph";

describe("Graph tests", () => {
  it("Random graph is created and contains right amount of vertices", () => {
    const numberOfVertices = 10;
    const graph = Graph.generateRandomGraph(numberOfVertices);
    const actualNumberOfVertices = Object.keys(graph.getAdjacencyList()).length;

    expect(actualNumberOfVertices).toBe(numberOfVertices);
  });

  it("Random graph is created. Can't add edges to undefined vertex", () => {
    const numberOfVertices = 10;
    const graph = Graph.generateRandomGraph(numberOfVertices);
    const addResult = graph.addEdges(255, 16678);

    expect(addResult).toBeFalsy();
  });

  it("Random graph is created. 3 edges established", () => {
    const numberOfVertices = 3;
    const graph = Graph.generateRandomGraph(numberOfVertices);
    graph.addEdges(0, 1);
    graph.addEdges(1, 2);
    graph.addEdges(2, 0);

    const adjacency = graph.getAdjacencyList();

    expect(adjacency[0].length).toBe(2);
  });

})
