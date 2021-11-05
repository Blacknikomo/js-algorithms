export class LinkedListItem<T> {
  value: T;
  next: LinkedListItem<T> | null = null
  prev: LinkedListItem<T> | null = null

  constructor(
    value: T,
    next: LinkedListItem<T> | null = null,
    prev: LinkedListItem<T> | null = null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export default class LinkedList<T> {
  private head: LinkedListItem<T> = null;
  private tail: LinkedListItem<T> = null;
  size: number = 0;

  constructor() {}

  prepend(value: T): LinkedList<T> {
    this.head = new LinkedListItem(value, this.head);
    this.size++;
    return this;
  }

  add(value: T): LinkedList<T> {
    const node = new LinkedListItem<T>(value);
    this.size++;

    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return this;
    }

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  find(value: T): T | null {
    let node = this.head;

    if (this.head.value === value) {
      return this.head.value;
    }

    while (node.next) {
      if (node.next.value === value) {
        return node.next.value;
      }

      node = node.next;
    }

    return null;
  }

  delete(value: T): T | null {
    if (!this.head) {
      return null;
    }


    if (this.head.value === value) {
      const buff = this.head.value;
      this.head = this.head.next;
      this.size--;
      return buff;
    }

    let node = this.head.next;
    let prevNode = this.head;

    while (node) {
      if (node.value === value) {
        prevNode.next = node.next;
        if (node === this.tail) {
          this.tail = prevNode;
        }

        this.size--;
        return node.value;
      }
      prevNode = node;
      node = node.next;
    }

    return null;
  }

  getInternals() {
    return {
      head: this.head,
      tail: this.tail,
      size: this.size
    }
  }
}
