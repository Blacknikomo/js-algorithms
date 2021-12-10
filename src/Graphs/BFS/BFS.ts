import Graph from "../Graph";
import Queue from "../../Queue/Queue";
import GraphVertex from "../Graph.vertex";

function noop() {}

export default class BFS {
  graph: Graph;
  queue = new Queue<GraphVertex<any>>();

  constructor(graph: Graph) {
    this.graph = graph;
  }

  public traverse(start: GraphVertex<any>, onVisit: (node: GraphVertex<any>) => void = noop): GraphVertex<any>[] {
    const visited = [];
    const discovered = new Set<GraphVertex<any>>();

    this.queue.enqueue(start);
    discovered.add(start);

    while (!this.queue.isEmpty()) {
      let node = this.queue.dequeue();

      onVisit(node);
      visited.push(node);

      const adjacentVertices = node.getAllConnections();
      for (let vertex of adjacentVertices) {
        if (!discovered.has(vertex)) {
          this.queue.enqueue(vertex);
          discovered.add(vertex);
        }
      }
    }

    return visited
  }
}
