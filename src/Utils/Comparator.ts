export type CompareFunctionType<T> = (a: T, b: T) => -1 | 0 | 1;

export default class Comparator<T> {
  compareFn: CompareFunctionType<T | number>

  static defaultCompareFunction: CompareFunctionType<number> = (a, b) => {
    if (a === b) {
      return 0;
    }

    return a < b ? -1 : 1;
  }
  constructor(compareFn?: CompareFunctionType<T>) {
    this.compareFn = compareFn || Comparator.defaultCompareFunction;
  }

  equal(a, b) {
    return this.compareFn(a, b) === 0;
  }

  lessOrEqualThan(a, b) {
    return this.less(a, b) || this.equal(a, b)
  }

  greaterOrEqualThan(a, b) {
    return this.greater(a, b) || this.equal(a, b)
  }

  less(a, b) {
    return this.compareFn(a, b) < 0;
  }

  greater(a, b) {
    return this.compareFn(a, b) > 0;
  }

  reverse() {
    const compareOriginal = this.compareFn;
    this.compareFn = (a, b) => compareOriginal(b, a);
  }
}
