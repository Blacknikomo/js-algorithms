import Graph from "../Graph";
import Stack from "../../Stack/Stack";
import GraphVertex from "../Graph.vertex";

function noop(node) {
  console.log(`Visit vertex ${node}`);
}

export enum Strategy {
  RECURSION,
  STACK
}
class DFSHelper {
  graph: Graph;
  strategy: Strategy

  constructor(graph: Graph, strategy: Strategy = Strategy.RECURSION) {
    this.graph = graph;
    this.strategy = strategy
  }

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

  public findPaths(start: GraphVertex<any>, end: GraphVertex<any>): GraphVertex<any>[][] {
    const paths = []
    const visited = new Map<GraphVertex<any>, boolean>()
    const stack = new Stack<GraphVertex<any>[]>();
    stack.put([start]);

    while (!stack.isEmpty()) {
      const path = stack.pop();
      const element = path[path.length - 1];

      for (let key of visited.keys()) {
        visited.set(key, false);
      }

      path.forEach(item => visited.set(item, true))

      if (element === end) {
        paths.push(path);
        visited.set(element, false)
        continue;
      }

      for (let vertex of element.getAllConnections().values()) {
        if (visited.get(vertex) !== true) {
          stack.put([...path, vertex])
        }
      }
    }

    return paths;
  }

  checkIfPathExists(start: GraphVertex<any>, end: GraphVertex<any>): boolean {
    const stack = new Stack<GraphVertex<any>>();
    const visited = new Set();
    stack.clear();
    stack.put(start);


    const dfs = (v: GraphVertex<any>) => {
      if (v === end) {
        return true;
      }

      if (visited.has(v)) {
        return false;
      }

      visited.add(v);
      // 0 1 2 3 4 5
      for (let vertex of v.getAllConnections().values()) {
        if (dfs(vertex)) {
          return true
        }
      }

      return false
    }

    return dfs(start);
  }
  public traverseWithStack(startNode: GraphVertex<any>, onVisit: (node) => void = noop) {
    const discovered = new Set<GraphVertex<any>>();
    const visited = new Set<GraphVertex<any>>();
    const stack: Stack<GraphVertex<any>> = new Stack()

    stack.clear();
    stack.put(startNode);

    while (!stack.isEmpty()) {
      const element = stack.pop();
      const connections = element.getAllConnections();
      discovered.add(element);

      if (visited.has(element)) {
        continue;
      }

      if (connections.size === 0) {
        onVisit(element);
        visited.add(element);
        continue;
      }

      for (let neighbour of connections) {
        if (!discovered.has(neighbour)) {
          stack.put(neighbour);
        }
      }

      onVisit(element);
      visited.add(element);
    }
  }

  public traverseRecursion(
    vertex: GraphVertex<any>,
    onVisit: (node) => void = noop,
    discovered = new Set<GraphVertex<any>>(),
    visited = new Set<GraphVertex<any>>(),
    ) {
    const connections = vertex.getAllConnections();
    discovered.add(vertex);

    onVisit(vertex);
    visited.add(vertex);

    if (connections.size === 0) {
      onVisit(vertex);
      visited.add(vertex);
      return;
    }

    for (let neighbour of connections.values()) {
      if (!discovered.has(neighbour)) {
        this.traverseRecursion(neighbour, onVisit, discovered, visited);
      }
    }

  }
}

export default DFSHelper;
