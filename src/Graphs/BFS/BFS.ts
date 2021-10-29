import Graph from "../Graph";
import Queue from "../../Queue/Queue";

function noop() {}

export default class BFS {
  graph: Graph;
  visited = {};
  discovered = {}

  queue = new Queue<number>();

  constructor(graph: Graph) {
    this.graph = graph;
  }

  public traverse(start: number, onVisit: (node: number) => void = noop) {
    const visited = [];
    const discovered = {};
    const adjacentVertices = this.graph.getAdjacencyList();

    this.queue.enqueue(start);
    discovered[start] = true;

    while (!this.queue.isEmpty()) {
      let node = this.queue.dequeue();

      onVisit(node);
      visited.push(node);

      const adjacency = adjacentVertices[node]
      for (let i = 0; i < adjacency.length; i++) {
        const next = adjacency[i];
        if (!discovered[next]) {
          this.queue.enqueue(adjacency[i]);
          discovered[next] = true;
        }
      }
    }

    return visited
  }
}
