import Heap from "./Heap";

export default class HeapMin<T> extends Heap<T> {
  pairIsInCorrectOrder(firstElement, secondElement) {
    return this.compare.lessOrEqualThan(firstElement, secondElement);
  }
}
