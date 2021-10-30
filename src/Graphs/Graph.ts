export default class Graph {
  adjacency: {
    [P: number]: Array<number>
  } = {}

  constructor() {}

  static generateRandomGraph(amount: number) {
    const items = Array.from(new Array(amount), (_, i) => i);
    const graph = new Graph();

    items.forEach(v => graph.addVertex(v));
    return graph;
  }

  applyEdges(edges: number[][], bidirectional = true) {
    for (let i = 0; i < edges.length; i++) {
      this.addEdge(edges[i][0], edges[i][1], bidirectional);
    }
  }

  addVertex(vertex: number) {
    if (this.adjacency[vertex]) {
      return;
    }

    this.adjacency[vertex] = [];
  }

  getAdjacencyList() {
    return this.adjacency;
  }

  get size() {
    return Object.keys(this.adjacency).length;
  }

  checkConnection(v1: number) {
    return {
      to: (v2: number) => {
        if (this.adjacency[v1] == null || this.adjacency[v2] == null) {
          return false
        }

        return this.adjacency[v1].includes[v2]
      }
    }
  }

  addEdge(v1: number, v2: number, bidirectional = true): boolean {
    if (this.adjacency[v1] == null || this.adjacency[v2] == null) {
      return false
    }

    if (!this.adjacency[v1].includes(v2)) this.adjacency[v1].push(v2);
    if (bidirectional && !this.adjacency[v2].includes(v1)) this.adjacency[v2].push(v1);

    return true
  }
}
