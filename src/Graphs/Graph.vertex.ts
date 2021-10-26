export default class GraphVertex<T> {
  value: T;
  edges: Array<GraphVertex<T>>
  id: Symbol;

  constructor(value: T, edges: Array<GraphVertex<T>>) {
    this.value = value;
    this.edges = edges;
    this.id = Symbol("vertex");
  }

  private isConnectedTo(vertex: GraphVertex<T>): boolean {
    return this.edges.includes(vertex);
  }

  removeConnection(vertex: GraphVertex<T>) {
    this.edges.filter(item => item != vertex);
  }

  connectTo(vertex: GraphVertex<T>, bidirect = true) {
    if (this.isConnectedTo(vertex)) {
      return;
    }

    this.edges.push(vertex);

    if (bidirect) {
      vertex.connectTo(this);
    }
  }

  disconnectFrom(vertex: GraphVertex<T>) {
    if (this.isConnectedTo(vertex)) {
      vertex.removeConnection(this);
      this.removeConnection(vertex);
    }
  }
}
