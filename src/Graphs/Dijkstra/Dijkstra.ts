import PriorityQueue from "../../PriorityQueue/PriorityQueue";
import Graph from "../Graph";

export default class Dijkstra {
  graph: Graph;
  times: number[][];
  start: number;
  queue = new PriorityQueue();


  constructor(graph: Graph, times: number[][], start) {
    this.graph = graph;
    this.times = times;
    this.start = start;
  }

  getMaxPathLength() {
    const distances: {[P: number]: {distance: number; prevElement: number;}} = {}
    const visited = {};
    const previous = {};

    Array.from(
      ({length: this.graph.size}),
      (_, i) => distances[i] = {distance: i == this.start ? 0 : Infinity, prevElement: null});

    const adjacencyList = this.graph.getAdjacencyList();

    this.queue.add(this.start, distances[this.start].distance);

    while (!this.queue.isEmpty()) {
      let current = this.queue.poll();
      const contiguous = adjacencyList[current];

      contiguous.forEach(neighbor => {
        if (!visited[neighbor]) {
          const edge = this.times.find(([v1, v2]) => v1 === current && v2 === neighbor);
          const [_, __, weight] = edge;

          const existingDistanceToNeighbor = distances[neighbor].distance;
          const distanceToNeighborFromCurrent = distances[current].distance + weight;

          if (distanceToNeighborFromCurrent < existingDistanceToNeighbor) {
            distances[neighbor].distance = distanceToNeighborFromCurrent;
            previous[neighbor] = current;

            if (this.queue.hasValue(neighbor)) {
              this.queue.changePriority(neighbor, distances[neighbor].distance);
            }

          }

          if (!this.queue.hasValue(neighbor)) {
            this.queue.add(neighbor, distances[neighbor].distance);
          }
        }
      })

      visited[current] = current;
    }

    const res = Object.values(distances).map(({distance}) => distance).sort();
    return res[res.length - 1]
  }
}
