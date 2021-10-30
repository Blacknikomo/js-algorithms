import GraphVertex from "./Graph.vertex";

export default class GraphEdge<T> {
  public v1: GraphVertex<T>;
  public v2: GraphVertex<T>;
  public weight: number;

  constructor(v1: GraphVertex<T>, v2: GraphVertex<T>, weight: number) {
    this.v1 = v1;
    this.v2 = v2;
    this.weight = weight;
  }
}
