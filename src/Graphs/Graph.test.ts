import Graph from "./Graph";
import GraphVertex from "./Graph.vertex";
import GraphEdge from "./Graph.edge";

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
    const addResult = graph.addEdge(255, 16678);

    expect(addResult).toBeFalsy();
  });

  it("Random graph is created. 3 edges established", () => {
    const numberOfVertices = 3;
    const graph = Graph.generateRandomGraph(numberOfVertices);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(2, 0);

    const adjacency = graph.getAdjacencyList();

    expect(adjacency[0].length).toBe(2);
  });

})
describe("Graph vertices tests", () => {
  it("Vertex is created. Symbol contains ID", () => {
    const vertex = new GraphVertex("Denis");
    expect(vertex.key.toString()).toBe('Symbol(vertex-Denis)');
  });

  it("Connect two vertices.", () => {
    const vertex1 = new GraphVertex("Denis");
    const vertex2 = new GraphVertex("Tanja");
    vertex1.connectTo(vertex2);
    expect(vertex1.isConnectedTo(vertex2)).toBe(true);
    vertex1.disconnectFrom(vertex2);
    expect(vertex1.isConnectedTo(vertex2)).toBe(false);
  });

  it("Edge is created", () => {
    const v1 = new GraphVertex("Denis");
    const v2 = new GraphVertex("Tanja");
    v1.connectTo(v2);

    const edge = new GraphEdge(v1, v2, 10);

    expect(edge.weight).toBe(10);
  });

  it("Edge reverse is correct", () => {
    const v1 = new GraphVertex("Denis");
    const v2 = new GraphVertex("Tanja");
    v1.connectTo(v2);

    const edge = new GraphEdge(v1, v2, 10);
    edge.reverse();

    expect(edge.startVertex).toBe(v2);
  });

  it("Edges detect non connected vertices", () => {
    const v1 = new GraphVertex("Denis");
    const v2 = new GraphVertex("Tanja");

    const factory = () => new GraphEdge(v1, v2, 10);
    expect(factory).toThrow(TypeError);
  });
})
