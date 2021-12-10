export default class GraphVertex<T> {
  value: T;
  private edges: Set<GraphVertex<T>> = new Set();
  private readonly id: Symbol;

  constructor(value: T) {
    this.value = value;
    this.id = Symbol(`vertex-${value.toString()}`);
  }

  get key() {
    return this.id;
  }

  isConnectedTo(vertex: GraphVertex<T>): boolean {
    return this.edges.has(vertex);
  }

  getAllConnections() {
    return this.edges;
  }

  removeConnection(vertex: GraphVertex<T>) {
    this.edges.delete(vertex);
  }

  connectTo(vertex: GraphVertex<T>, directed = false) {
    if (this.isConnectedTo(vertex)) {
      return;
    }

    this.edges.add(vertex);

    if (directed == false) {
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
