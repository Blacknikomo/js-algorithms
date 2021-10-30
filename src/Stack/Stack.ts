export default class Stack<T> {
  private stack: Array<T> = [];
  constructor() {}

  put(task: T): void {
    this.stack.push(task)
  }

  pop(): T {
    return this.stack.pop();
  }

  isEmpty(): boolean {
    return this.stack.length === 0;
  }

  clear() {
    this.stack = [];
  }

  look(number) {
    if (number > this.stack.length) {
      return null;
    }
    this.stack[-number];
  }
}
