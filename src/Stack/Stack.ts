export default class Stack<T> {
  private stack: Array<T> = [];
  constructor() {}

  put(task: T): void {
    this.stack.push(task)
  }

  next(): T {
    return this.stack.pop();
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }
}
