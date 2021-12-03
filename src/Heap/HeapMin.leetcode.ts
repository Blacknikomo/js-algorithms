// [1,2,3,4,5,6,7] - Min Heap
// [7,5,4,4,4,3,1] - Max Heap

type IndexType = number;
const nullSymbol = Symbol("placeholder");
export default class HeapMinLeetcode<T> {
  private readonly container: T[];
  private size: number = 0;

  constructor() {
    this.container = new Array<T>();
    // @ts-ignore
    this.container[0] = nullSymbol;
  }

  addItem(item: T): void {
    this.container.push(item);
    this.size++;

    let currentPosition: IndexType = this.size;
    let parentPosition: IndexType = this.getParentIndex(currentPosition);
    let parent: T = this.getParent(currentPosition);

    while (parentPosition > 0 && item < parent && currentPosition > 1) {
      this.swap(currentPosition, parentPosition);
      currentPosition = parentPosition;
      parent = this.getParent(parentPosition)
      parentPosition = this.getParentIndex(parentPosition);
    }
  }

  // Look at the item, not use
  peek(): T | null {
    return this.container[1] ?? null;
  }

  // Use the item
  poll(): T | null {
    if (this.size < 1) {
      return null;
    }


    const item = this.container[1];
    this.size -= 1;
    const sinkingElement = this.container.pop();
    let sinkingElementIndex = 1;

    this.container[1] = sinkingElement;

    this.getLeftChild(sinkingElementIndex)
    this.getRightChild(sinkingElementIndex)

    while (
      this.getLeftChild(sinkingElementIndex) != null && sinkingElement > this.getLeftChild(sinkingElementIndex) ||
      this.getRightChild(sinkingElementIndex) != null && sinkingElement > this.getRightChild(sinkingElementIndex)
      ) {
      const leftChild = this.getLeftChild(sinkingElementIndex)
      const leftChildIndex = this.getLeftChildIndex(sinkingElementIndex)
      const rightChild = this.getRightChild(sinkingElementIndex)
      const rightChildIndex = this.getRightChildIndex(sinkingElementIndex)

      let indexToSwapWith = null;

      if (leftChild != null  && rightChild == null) indexToSwapWith = leftChildIndex
      if (leftChild == null && rightChild != null) indexToSwapWith = rightChildIndex

      if (leftChild != null && rightChild != null) {
        indexToSwapWith = leftChild < rightChild ? leftChildIndex : rightChildIndex;
      }

      this.swap(sinkingElementIndex, indexToSwapWith);
      sinkingElementIndex = indexToSwapWith;
    }

    return item;
  }

  // private heapifyUp(item: T) {}
  // private heapifyDown(item: T) {}

  private swap(childIndex: IndexType, parentIndex: IndexType) {
    const parentBuf = this.container[parentIndex];
    this.container[parentIndex] = this.container[childIndex];
    this.container[childIndex] = parentBuf;
  }

  private getLeftChildIndex(index: number): IndexType | null {
    return index * 2;
  }

  private getRightChildIndex(index: number): IndexType | null {
    return index * 2 + 1;
  }

  private getParentIndex(index: number): IndexType | null {
    return Math.floor(index / 2);
  }

  private getLeftChild(index: number): T | null {
    return this.container[this.getLeftChildIndex(index)] ?? null;
  }

  private getRightChild(index: number): T | null {
    return this.container[this.getRightChildIndex(index)] ?? null;
  }

  private getParent(index: number): T | null {
    return this.container[this.getParentIndex(index)] ?? null
  }

  // private hasLeftChild(index: number): boolean {}
  // private hasRightChild(index: number): boolean {}
  // private hasParent(index: number): boolean {}


}
