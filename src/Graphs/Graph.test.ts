import Graph from "./Graph";
import GraphVertex from "./Graph.vertex";
import GraphEdge from "./Graph.edge";

describe("Graph tests", () => {
  it("Random graph is created and contains right amount of vertices", () => {
    const numberOfVertices = 10;
    const graph = Graph.generateRandomGraph(numberOfVertices);
    const actualNumberOfVertices = graph.size;

    expect(actualNumberOfVertices).toBe(numberOfVertices);
  });

  it("Edges work correct", () => {
    const graph = new Graph();
    const v1 = new GraphVertex(1);
    const v2 = new GraphVertex(2);

    graph.addEdge(v1, v2);

    expect(graph.getEdges().size).toBe(1);
  });
});

describe("Graph vertices tests", () => {
  it("Vertex is created. Symbol contains ID", () => {
    const vertex = new GraphVertex("Denis");
    expect(vertex.key.toString()).toBe('Symbol(vertex-Denis)');
  });

  it("Connect two vertices undirected.", () => {
    const vertex1 = new GraphVertex("Denis");
    const vertex2 = new GraphVertex("Tanja");
    vertex1.connectTo(vertex2);
    expect(vertex1.isConnectedTo(vertex2)).toBe(true);
    vertex1.disconnectFrom(vertex2);
    expect(vertex1.isConnectedTo(vertex2)).toBe(false);
  });

  it("Connect two vertices directed.", () => {
    const vertex1 = new GraphVertex("Denis");
    const vertex2 = new GraphVertex("Tanja");
    vertex1.connectTo(vertex2, true);
    expect(vertex1.isConnectedTo(vertex2)).toBe(true);
    expect(vertex2.isConnectedTo(vertex1)).toBe(false);
  });

  it("Create weighted edge.", () => {
    const vertex1 = new GraphVertex("Denis");
    const vertex2 = new GraphVertex("Tanja");
    vertex1.connectTo(vertex2);
    const edge = new GraphEdge(vertex1, vertex2, 5);

    expect(edge.weight).toBe(5);
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

  it("Can get all neighbors", () => {
    const v1 = new GraphVertex("Denis");
    const v2 = new GraphVertex("Tanja");
    const v3 = new GraphVertex("Hohoslik");
    const v4 = new GraphVertex("Hohulya");

    v1.connectTo(v2);
    v1.connectTo(v3);
    v3.connectTo(v4, true);

    expect(v1.getAllConnections().size).toBe(2);
    expect(v1.isConnectedTo(v4)).toBeFalsy();
    expect(v2.isConnectedTo(v1)).toBeTruthy();
    expect(v3.isConnectedTo(v4)).toBeTruthy();
    expect(v4.isConnectedTo(v3)).toBeFalsy();

    v3.disconnectFrom(v4);
    expect(v3.isConnectedTo(v4)).toBeFalsy();

  });

})
