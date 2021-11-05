import HeapMin from "../Heap/HeapMin";
import Comparator from "../Utils/Comparator";

export default class PriorityQueue<T = number> extends HeapMin<T> {
  priorities = new Map();
  compare: Comparator<T>;

  constructor() {
    super();
    this.compare = new Comparator<T>(this.comparePriority);
  }

  add(value: T, priority: number = 0) {
    this.priorities.set(value, priority);
    super.add(value);
    return this;
  }

  remove(value: T, customFindingComparator) {
    super.remove(value, customFindingComparator);
    this.priorities.delete(value);
    return this;
  }

  changePriority(value: T, newPriority) {
    this.remove(value, new Comparator(this.compareValue));
    this.add(value, newPriority);
    return this;
  }

  findByValue(value) {
    return this.find(value, new Comparator<T>(this.compareValue))
  }

  hasValue(item) {
    return this.findByValue(item).length > 0;
  }

  comparePriority = (a, b) => {
    const pA = this.priorities.get(a);
    const pB = this.priorities.get(b);

    if (pA === pB) {
      return 0;
    }

    return pA < pB ? -1 : 1;
  }

  compareValue(a, b) {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }

  get size() {
    return this.storage.length;
  }
}
