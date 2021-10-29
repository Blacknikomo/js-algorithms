import LinkedList from "../LinkedList/LinkedList";

export default class Queue<T> {
  storage: LinkedList<T> = new LinkedList<T>();

  constructor() {}

  enqueue(item: T) {
    this.storage.add(item);
  }

  dequeue(): T {
    const {head} = this.storage.getInternals();
    if (head === null) {
      return null;
    }

    return this.storage.delete(head.value);
  }

  flush() {
    let {head} = this.storage.getInternals();
    while (head) {
      this.storage.delete(head.value)
      head = head.next;
    }
  }

  isEmpty() {
    return this.size === 0
  }

  get size() { return this.storage.size }
}
