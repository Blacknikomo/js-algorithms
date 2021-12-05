// @ts-ignore
import MinHeapLeetcode from "./HeapMin.leetcode";
import MaxHeapLeetcode from "./HeapMax.leetcode";

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
describe("Custom MinHeap", () => {
  it("Add item sorts items correct", () => {
    const minHeap = new MinHeapLeetcode<number>();
    [5,4,3,3,7].forEach(i => minHeap.addItem(i));
    expect(minHeap.peek()).toBe(3);
  });

  it("Poll get last element and re-sorts it through the array", () => {
    const minHeap = new MinHeapLeetcode<number>();
    const arr = Array.from({length: 1000}, () => generateRandomInt(0, 1500));

    arr.forEach(i => minHeap.addItem(i));
    arr
      .sort((a, b) => a - b)
      .forEach(item => {
        const result = minHeap.poll()
        // console.log(result)
        expect(result).toBe(item);
      });
  });
});


describe("Custom MaxHeap", () => {
  it("Add item sorts items correct", () => {
    const heap = new MaxHeapLeetcode<number>();
    [5,4,3,3,7].forEach(i => heap.addItem(i));
    expect(heap.peek()).toBe(7);
  });

  it("Poll get last element and re-sorts it through the array", () => {
    const heap = new MaxHeapLeetcode<number>();
    const arr = Array.from({length: 1000}, () => generateRandomInt(0, 1500));

    arr.forEach(i => heap.addItem(i));
    arr
      .sort((a, b) => b - a)
      .forEach(item => {
        const result = heap.poll()
        expect(result).toBe(item);
      });
  });
});
