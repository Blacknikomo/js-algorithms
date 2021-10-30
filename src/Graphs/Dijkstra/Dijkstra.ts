import Graph from "../Graph";
import Queue from "../../Queue/Queue";

export default class Dijkstra {
  graph: Graph;
  times: number[][];
  start: number;


  constructor(graph: Graph, times: number[][], start) {
    this.graph = graph;
    this.times = times;
    this.start = start;
  }

  getMaxPathLength() {
    const vertices: {[P: number]: {distance: number; prevElement: number;}} = {}
    Array.from(
      ({length: this.graph.size}),
      (_, i) => vertices[i] = {distance: i == this.start ? 0 : Infinity, prevElement: i});
    const queue = new Queue<number>();
    const visited = {};
    const adjacencyList = this.graph.getAdjacencyList();

    queue.enqueue(this.start);
    while (!queue.isEmpty()) {
      let node = queue.dequeue();
      const contiguous = adjacencyList[node];

      for (let i = 0; i < contiguous.length; i++) {
        const current = contiguous[i];
        const time = this.times.find(([v1, v2]) => v1 === node && v2 === current);
        const [_, __, weight] = time;

        if (!visited[current]) {
          if (vertices[current]?.distance > weight) {
            vertices[current] = {
              distance: weight + vertices[node].distance,
              prevElement: node,
            }
          }

          queue.enqueue(current);
        }
      }

      visited[node] = true;
    }

    const distances = Object.values(vertices).map(({distance}) => distance).sort();
    return distances[distances.length - 1]
  }
}
