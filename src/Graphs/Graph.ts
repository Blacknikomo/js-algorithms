import GraphVertex from "./Graph.vertex";
import GraphEdge from "./Graph.edge";

export default class Graph {
  private vertices: Set<GraphVertex<any>> = new Set();
  private edges: Set<GraphEdge<any>> = new Set();
  private directed = false;

  constructor(directed = false) {
    this.directed = directed;
  }

  static generateRandomGraph(amount: number) {
    const items = Array.from(new Array(amount), (_, i) => i);
    const graph = new Graph();

    items.forEach(v => {
      const vertex = new GraphVertex(v);
      graph.addVertex(vertex);
    });

    return graph;
  }

  addVertex(vertex: GraphVertex<any>) {
    this.vertices.add(vertex);
  }

  get size() {
    return this.vertices.size;
  }

  getVertices = () => this.vertices;
  getEdges = () => this.edges;

  addEdge(v1: GraphVertex<any> | GraphEdge<any>, v2?: GraphVertex<any>, weight = 0): void {
    if (v1 instanceof GraphEdge) {
      this.edges.add(v1);
      this.addVertex(v1.startVertex);
      this.addVertex(v1.endVertex);
      return;
    }

    if (v1 instanceof GraphVertex && v2 instanceof GraphVertex) {
      v1.connectTo(v2, this.directed);
      this.addVertex(v1);
      this.addVertex(v2);

      const edge = new GraphEdge(v1, v2, weight)
      this.edges.add(edge);
      return;
    }
  }
}
