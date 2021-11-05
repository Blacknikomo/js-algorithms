import Heap from "./Heap";

export default class HeapMax<T> extends Heap<T> {
  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.compare.greaterOrEqualThan(firstElement, secondElement);
  }
}
