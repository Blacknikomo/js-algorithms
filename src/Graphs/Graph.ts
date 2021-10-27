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

  addVertex(vertex: number) {
    if (this.adjacency[vertex]) {
      return;
    }

    this.adjacency[vertex] = [];
  }

  getAdjacencyList() {
    return this.adjacency;
  }

  addEdge(v1: number, v2: number): boolean {
    if (!this.adjacency[v1] || !this.adjacency[v2]) {
      return false
    }

    // O(4v)
    if (!this.adjacency[v1].includes(v2)) this.adjacency[v1].push(v2);
    if (!this.adjacency[v2].includes(v1)) this.adjacency[v2].push(v1);

    return true
  }
}
