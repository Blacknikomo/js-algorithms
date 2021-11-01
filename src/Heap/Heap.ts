import Comparator from "../Utils/Comparator";

// Initially min heap
export default class Heap<T> {
  compareFn: Comparator<T>;
  storage: Array<T> = [];

  constructor(comparator = new Comparator<T>()) {
    if (new.target === Heap) {
      throw new TypeError("Not allowed to create a HeapInstance directly");
    }

    this.compareFn = comparator;
  }

  add(item: T): Heap<T> {
    this.storage.push(item);
    this.heapifyUp();

    return this;
  }

  getLeftChildIndex(parentIndex: number) {
    return (2 * parentIndex) + 1;
  }

  getRightChildIndex(parentIndex: number) {
    return (2 * parentIndex) + 2;
  }

  getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }

  hasParent(index: number) {
    return this.getParentIndex(index) >= 0;
  }

  hasLeftChild(index: number) {
    return this.getLeftChildIndex(index) < this.storage.length;
  }

  hasRightChild(index: number) {
    return this.getRightChildIndex(index) < this.storage.length;
  }

  leftChild(index: number) {
    return this.storage[this.getLeftChildIndex(index)];
  }

  right(index: number) {
    return this.storage[this.getLeftChildIndex(index)];
  }

  parent(index: number) {
    return this.storage[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    const buf = this.storage[index2];
    this.storage[index2] = this.storage[index1];
    this.storage[index1] = buf;
  }

  next(): T | null {
    if (this.storage.length === 0) {
      return null
    }

    return this.storage[0];
  }

  poll(): T | null {
    if (this.storage.length === 0) {
      return null;
    }

    if (this.storage.length === 1) {
      return this.storage.pop();
    }

    const item = this.storage[0];
    this.storage[0] = this.storage.pop();
    this.heapifyDown();

    return item;
  }


  heapifyUp(itemIndex?: number): Heap<T> {
    let currentIndex = itemIndex || this.storage.length - 1;

    while (this.hasParent(currentIndex) && !this.pairIsInCorrectOrder(this.parent(currentIndex), this.storage[currentIndex])) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }

    return this;
  }

  heapifyDown(startIndex = 0): Heap<T> {
    let currentIndex = startIndex;
    let nextIndex = null;

    while (this.hasLeftChild(currentIndex)) {
      this.hasRightChild(currentIndex) && this.pairIsInCorrectOrder(this.right(currentIndex), this.leftChild(currentIndex)) ?
        nextIndex = this.getRightChildIndex(currentIndex) :
        nextIndex = this.getLeftChildIndex(currentIndex);

      if (this.pairIsInCorrectOrder(this.storage[currentIndex], this.storage[nextIndex])) {
        break;
      }

      this.swap(currentIndex, nextIndex);
      currentIndex = nextIndex;
    }
    return this;
  }

  find(item: T, comparator: Comparator<T>) {
    return this.storage.map((_, index) => comparator.equal(item, this.storage[index]) && index)
  }

  remove(item, comparator = this.compareFn) {
    const itemsToRemove = this.find(item, comparator);

    itemsToRemove.forEach(() => {
      const indexToRemove = this.find(item, comparator).pop();

      if (indexToRemove === (this.storage.length - 1)) {
        this.storage.pop();
      } else {
        this.storage[indexToRemove] = this.storage.pop();
        const parent = this.parent(indexToRemove);

        this.hasLeftChild(indexToRemove) && (!parent || this.pairIsInCorrectOrder(parent, this.storage[indexToRemove])) ?
          this.heapifyDown():
          this.heapifyUp()

      }
    });

    return this;
  }

  pairIsInCorrectOrder(firstElement, secondElement): boolean {
    throw new Error(`
      You have to implement heap pair comparision method
      for ${firstElement} and ${secondElement} values.
    `);
  }

  isEmpty() {
    return this.storage.length === 0;
  }
}
