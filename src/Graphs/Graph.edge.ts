import GraphVertex from "./Graph.vertex";

export default class GraphEdge<T> {
  public startVertex: GraphVertex<T>;
  public endVertex: GraphVertex<T>;
  public weight: number;

  public id: Symbol;

  constructor(v1: GraphVertex<T>, v2: GraphVertex<T>, weight: number = 0) {
    if (!v1.isConnectedTo(v2)) {
      throw new TypeError("Vertices are not connected. Connect them first.")
    }

    this.startVertex = v1;
    this.endVertex = v2;
    this.weight = weight;
    this.id = GraphEdge.generateID(v1, v2);
  }

  reverse() {
    [this.startVertex, this.endVertex] = [this.endVertex, this.startVertex];
  }

  static generateID(v1: GraphVertex<any>, v2: GraphVertex<any>) {
    if (!v1 || !v2) {
      throw new Error("One of vertices is not specified.");
    }

    return Symbol(`edge:${v1.key.toString()}-${v2.key.toString()}`);
  }
}
