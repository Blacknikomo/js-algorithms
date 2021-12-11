import Comparator from "../Utils/Comparator";

// Initially min heap
export default class Heap<T> {
  compare: Comparator<T>;
  storage: Array<T> = [];

  constructor(comparator = new Comparator<T>()) {
    if (new.target === Heap) {
      throw new TypeError("Not allowed to create a HeapInstance directly");
    }

    this.compare = comparator;
  }

  flush() {
    this.storage = [];
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
    return this.storage[this.getRightChildIndex(index)];
  }

  parent(index: number) {
    return this.storage[this.getParentIndex(index)];
  }

  swap(index1, index2) {
    const buf = this.storage[index2];
    this.storage[index2] = this.storage[index1];
    this.storage[index1] = buf;
  }

  peek(): T | null {
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

  find(item: T, comparator: Comparator<T> = this.compare) {
    const foundItemIndices = [];

    for (let itemIndex = 0; itemIndex < this.storage.length; itemIndex += 1) {
      if (comparator.equal(item, this.storage[itemIndex])) {
        foundItemIndices.push(itemIndex);
      }
    }

    return foundItemIndices;
  }

  remove(item, comparator = this.compare) {
    const numberOfItemsToRemove = this.find(item, comparator).length;

    for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {
      // We need to find item index to remove each time after removal since
      // indices are being changed after each heapify process.
      const indexToRemove = this.find(item, comparator).pop();

      // If we need to remove last child in the heap then just remove it.
      // There is no need to heapify the heap afterwards.
      if (indexToRemove === (this.storage.length - 1)) {
        this.storage.pop();
      } else {
        // Move last element in heap to the vacant (removed) position.
        this.storage[indexToRemove] = this.storage.pop();

        // Get parent.
        const parentItem = this.parent(indexToRemove);

        // If there is no parent or parent is in correct order with the node
        // we're going to delete then heapify down. Otherwise heapify up.
        if (
          this.hasLeftChild(indexToRemove)
          && (
            !parentItem
            || this.pairIsInCorrectOrder(parentItem, this.storage[indexToRemove])
          )
        ) {
          this.heapifyDown(indexToRemove);
        } else {
          this.heapifyUp(indexToRemove);
        }
      }
    }

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

  toString() {
    return this.storage.toString();
  }
}
