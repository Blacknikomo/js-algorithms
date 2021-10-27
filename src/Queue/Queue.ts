class Queue<T> {
  storage: Array<T>;

  constructor(size = 500) {
    this.storage = new Array(size);
  }

  enqueue(item: T) {
    this.storage = [item, ...this.storage];
  }

  dequeue() {
    return this.storage.pop();
  }
}
