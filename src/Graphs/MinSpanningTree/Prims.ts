export default class Prims {
  vertices: number[][];

  constructor(vertices: number[][]) {
    this.vertices = vertices;
  }

  getMinCost() {
    const visited: number[][] = [this.vertices[0]];
    const notVisited: number[][] = [...this.vertices.slice(1)];
    let length = 0;

    while(notVisited.length > 0) {
      let min: {length: number, j} = null

      for (let i = 0; i < visited.length; i++) {
        for (let j = 0; j < notVisited.length; j++) {
          const [xi, yi] = visited[i];
          const [xj, yj] = notVisited[j];

          const length = Math.abs(xi - xj) + Math.abs(yi - yj);

          if (!min || min?.length > length) {
            min = {
              length,
              j
            }
          }
        }
      }

      visited.push(notVisited[min.j]);
      notVisited.splice(min.j, 1);

      length += min.length;
    }

    return length;


  }
}
