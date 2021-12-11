import PriorityQueue from "../../PriorityQueue/PriorityQueue";
import Graph from "../Graph";
import GraphVertex from "../Graph.vertex";
import GraphEdge from "../Graph.edge";

export default class Dijkstra {
  graph: Graph;

  queue = new PriorityQueue<GraphVertex<any>>();

  constructor(graph: Graph) {
    this.graph = graph;
  }

  checkFullPath() {}
  updateMinWeightTreeIfNeeded() {}

  getShortestPath(start: GraphVertex<any>, finish: GraphVertex<any>) {
    this.queue.flush();
    const distances = [];
    const edges = this.graph.getEdges();
    const weights = new Map<GraphVertex<any>, number>();

    for (let vertex of this.graph.getVertices().values()) {
      weights.set(vertex, vertex == start ? 0 : +Infinity);
    }

    this.queue.add(start);

    while (!this.queue.isEmpty()) {
      const anchor = this.queue.poll();
      const neighbours = anchor.getAllConnections().values();

      for (let neighbour of neighbours) {
        const currentMinPath = weights.get(neighbour);
        const edgeKey = GraphEdge.generateID(anchor, neighbour);
        const edge = [...edges].find(edge => edge.id === edgeKey);

        if (!edge) {
          throw new Error(`No edge with a key ${edgeKey}`)
        }

        const newPathLength = weights.get(anchor) + edge.weight;
        weights.set(neighbour, Math.min(newPathLength, currentMinPath));

        if (neighbour == finish) {
          distances.push(weights.get(neighbour));
        } else {
          this.queue.add(neighbour);
        }
      }
    }

    return distances.sort((a, b) => a - b)[0];
  }
}
