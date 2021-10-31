type CompareFunctionType = (a: any, b: any) => -1 | 0 | 1;
export default class Comparator {
  compareFn: CompareFunctionType

  static defaultCompareFunction: CompareFunctionType = (a, b) => {
    if (a == b) {
      return 0;
    }

    return a > b ? 1 : -1;
  }
  constructor(compareFn?: CompareFunctionType) {
    this.compareFn = compareFn || Comparator.defaultCompareFunction;
  }

  equal(a, b) {
    return this.compareFn(a, b) === 0;
  }

  lessOrEqualThan(a, b) {
    return this.compareFn(a, b) <= 0;
  }

  greaterOrEqualThan(a, b) {
    return this.compareFn(a, b) >= 0;
  }

  less(a, b) {
    return this.compareFn(a, b) < 0;
  }

  greater(a, b) {
    return this.compareFn(a, b) > 0;
  }
}
