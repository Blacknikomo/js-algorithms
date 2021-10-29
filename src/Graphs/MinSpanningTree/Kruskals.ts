import DisjointSet from "../DisjointSet/DisjointSet";

export default class Kruskals {
  vertices: number[][];
  unionFind: DisjointSet


  constructor(vertices: number[][]) {
    this.vertices = vertices;
    this.unionFind = new DisjointSet();

    vertices.forEach((_, index) => this.unionFind.add(index));
  }

  getMinCost() {
    const edges = [];
    for (let i = 0; i < this.vertices.length - 1; i++) {
      for (let j = i + 1; j < this.vertices.length; j++) {
        const [xi, yi] = this.vertices[i];
        const [xj, yj] = this.vertices[j];

        const length = Math.abs(xi - xj) + Math.abs(yi - yj);
        edges.push({start: i, end: j, length});
      }
    }

    edges.sort((a, b) => a.length - b.length);

    return edges.reduce((accumulator, current) => {
      const {start, end, length} = current;
      if (this.unionFind.connected(start, end)) {
        return accumulator;
      }

      this.unionFind.union(start, end);

      accumulator += length;

      return accumulator;
    }, 0)
  }
}
