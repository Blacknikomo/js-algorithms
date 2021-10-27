import Graph from "../Graph";
import Stack from "../../Stack/Stack";

function noop(node) {
  console.log(`Visit vertex ${node}`);
}

export enum Strategy {
  RECURSION,
  STACK
}
class DFSHelper {
  graph: Graph;
  visited = {};
  discovered = {};

  // @ts-ignore
  stack: Stack<number> = new Stack<number>()
  depth = 0

  strategy: Strategy

  constructor(graph: Graph, strategy: Strategy = Strategy.RECURSION) {
    this.graph = graph;
    this.strategy = strategy
  }

  public printTree() {}

  public traverse(...args) {
    switch (this.strategy) {
      case Strategy.RECURSION:
        this.traverseRecursion.apply(this, args);
        break;
      case Strategy.STACK:
        this.traverseWithStack.apply(this, args);
        break;
    }
  }

  public traverseWithStack(startNode: number, onVisit: (node) => void = noop) {
    const adjacencyList = this.graph.getAdjacencyList();
    this.stack.put(startNode);

    // O(E)
    while (!this.stack.isEmpty()) {
      const element = this.stack.next();

      const connections = adjacencyList[element];
      this.discovered[element] = true

      if (this.visited[element]) {
        continue;
      }

      if (connections.length === 0) {
        onVisit(element);
        this.visited[element] = true;
        continue;
      }

      for (let i = 0; i < connections.length; i++) {
        const nextNode = connections[i];
        if (!this.discovered[nextNode]) {
          this.stack.put(nextNode)
        }
      }

      onVisit(element);
      this.visited[element] = true;
    }
  }

  public traverseRecursion(node: number, onVisit: (node) => void = noop) {
    const adjacencyList = this.graph.getAdjacencyList();
    const connections = adjacencyList[node];
    this.discovered[node] = true

    if (connections.length === 0) {
      onVisit(node);
      this.visited[node] = true
      return;
    }

    for (let i = 0; i < connections.length; i++) {
      const nextNode = connections[i];
      if (!this.discovered[nextNode]) {
        this.traverse(connections[i], onVisit);
      }
    }

    onVisit(node);
    this.visited[node] = true
  }

  getVisitedCount() {
    return Object.keys(this.visited).length;
  }

  getDiscoveredCount() {
    return Object.keys(this.discovered).length;
  }
}

export default DFSHelper;
