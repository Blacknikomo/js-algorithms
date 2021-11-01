import Heap from "./Heap";
import HeapMin from "./HeapMin";
import HeapMax from "./HeapMax";

describe("Heap tests", () => {
  const n = 20;
  const testArray = Array.from({length: n}, () => Math.random());

  it("Random array is created", () => {
    expect(testArray.length).toBe(n);
  });

  it("Direct construction if forbidden", () => {
    expect(() => new Heap()).toThrow(TypeError)
  });

  it("Min heap: first item is the smallest", () => {
    const heap = new HeapMin<number>();
    testArray.forEach(i => heap.add(i));
    const min = testArray
      .reduce((accumulator, current) =>
        (accumulator == null || accumulator > current) ? current : accumulator,
        null);

    expect(heap.storage[0]).toBe(min)
  });

  it("Max heap: first item is the greates", () => {
    const heap = new HeapMax<number>();
    testArray.forEach(i => heap.add(i));

    const max = testArray
      .reduce((accumulator, current) =>
          (accumulator == null || accumulator < current) ? current : accumulator,
        null);

    expect(heap.storage[0]).toBe(max)
  });

})
