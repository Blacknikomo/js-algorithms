import MinHeap from "./HeapMin";
import MaxHeap from "./HeapMax";
import Comparator from "../Utils/Comparator";

describe("Min Heap tests", () => {
  it('should add items to the heap and heapify it up', () => {
    const minHeap = new MinHeap();

    minHeap.add(5);
    expect(minHeap.isEmpty()).toBe(false);
    expect(minHeap.peek()).toBe(5);
    expect(minHeap.toString()).toBe('5');

    minHeap.add(3);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.toString()).toBe('3,5');

    minHeap.add(10);
    expect(minHeap.peek()).toBe(3);
    expect(minHeap.toString()).toBe('3,5,10');

    minHeap.add(1);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.toString()).toBe('1,3,10,5');

    minHeap.add(1);
    expect(minHeap.peek()).toBe(1);
    expect(minHeap.toString()).toBe('1,1,10,5,3');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('1,3,10,5');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('3,5,10');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('5,10');
  });

  it('should poll items from the heap and heapify it down', () => {
    const minHeap = new MinHeap();

    minHeap.add(5);
    minHeap.add(3);
    minHeap.add(10);
    minHeap.add(11);
    minHeap.add(1);

    expect(minHeap.toString()).toBe('1,3,10,11,5');

    expect(minHeap.poll()).toBe(1);
    expect(minHeap.toString()).toBe('3,5,10,11');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('5,11,10');

    expect(minHeap.poll()).toBe(5);
    expect(minHeap.toString()).toBe('10,11');

    expect(minHeap.poll()).toBe(10);
    expect(minHeap.toString()).toBe('11');

    expect(minHeap.poll()).toBe(11);
    expect(minHeap.toString()).toBe('');

    expect(minHeap.poll()).toBeNull();
    expect(minHeap.toString()).toBe('');
  });

  it('should heapify down through the right branch as well', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(12);
    minHeap.add(10);

    expect(minHeap.toString()).toBe('3,12,10');

    minHeap.add(11);
    expect(minHeap.toString()).toBe('3,11,10,12');

    expect(minHeap.poll()).toBe(3);
    expect(minHeap.toString()).toBe('10,11,12');
  });

  it('should be possible to find item indices in heap', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(12);
    minHeap.add(10);
    minHeap.add(11);
    minHeap.add(11);

    expect(minHeap.toString()).toBe('3,11,10,12,11');

    expect(minHeap.find(5)).toEqual([]);
    expect(minHeap.find(3)).toEqual([0]);
    expect(minHeap.find(11)).toEqual([1, 4]);
  });

  it('should be possible to remove items from heap with heapify down', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(12);
    minHeap.add(10);
    minHeap.add(11);
    minHeap.add(11);

    expect(minHeap.toString()).toBe('3,11,10,12,11');

    expect(minHeap.remove(3).toString()).toEqual('10,11,11,12');
    expect(minHeap.remove(3).peek()).toEqual(10);
    expect(minHeap.remove(11).toString()).toEqual('10,12');
    expect(minHeap.remove(3).peek()).toEqual(10);
  });

  it('should be possible to remove items from heap with heapify up', () => {
    const minHeap = new MinHeap();

    minHeap.add(3);
    minHeap.add(10);
    minHeap.add(5);
    minHeap.add(6);
    minHeap.add(7);
    minHeap.add(4);
    minHeap.add(6);
    minHeap.add(8);
    minHeap.add(2);
    minHeap.add(1);

    expect(minHeap.toString()).toBe('1,2,4,6,3,5,6,10,8,7');
    expect(minHeap.remove(8).toString()).toEqual('1,2,4,6,3,5,6,10,7');
    expect(minHeap.remove(7).toString()).toEqual('1,2,4,6,3,5,6,10');
    expect(minHeap.remove(1).toString()).toEqual('2,3,4,6,10,5,6');
    expect(minHeap.remove(2).toString()).toEqual('3,6,4,6,10,5');
    expect(minHeap.remove(6).toString()).toEqual('3,5,4,10');
    expect(minHeap.remove(10).toString()).toEqual('3,5,4');
    expect(minHeap.remove(5).toString()).toEqual('3,4');
    expect(minHeap.remove(3).toString()).toEqual('4');
    expect(minHeap.remove(4).toString()).toEqual('');
  });

  it('should be possible to remove items from heap with custom finding comparator', () => {
    const minHeap = new MinHeap();
    minHeap.add('dddd');
    minHeap.add('ccc');
    minHeap.add('bb');
    minHeap.add('a');

    expect(minHeap.toString()).toBe('a,bb,ccc,dddd');

    const comparator = new Comparator<string>((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    minHeap.remove('hey', comparator);
    expect(minHeap.toString()).toBe('a,bb,dddd');
  });

  it('should remove values from heap and correctly re-order the tree', () => {
    const minHeap = new MinHeap();

    minHeap.add(1);
    minHeap.add(2);
    minHeap.add(3);
    minHeap.add(4);
    minHeap.add(5);
    minHeap.add(6);
    minHeap.add(7);
    minHeap.add(8);
    minHeap.add(9);

    expect(minHeap.toString()).toBe('1,2,3,4,5,6,7,8,9');

    minHeap.remove(2);
    expect(minHeap.toString()).toBe('1,4,3,8,5,6,7,9');

    minHeap.remove(4);
    expect(minHeap.toString()).toBe('1,5,3,8,9,6,7');
  });
})

describe("Max Heap test", () =>{
  it('should add items to the heap and heapify it up', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    expect(maxHeap.isEmpty()).toBe(false);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe('5');

    maxHeap.add(3);
    expect(maxHeap.peek()).toBe(5);
    expect(maxHeap.toString()).toBe('5,3');

    maxHeap.add(10);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5');

    maxHeap.add(1);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5,1');

    maxHeap.add(1);
    expect(maxHeap.peek()).toBe(10);
    expect(maxHeap.toString()).toBe('10,3,5,1,1');

    expect(maxHeap.poll()).toBe(10);
    expect(maxHeap.toString()).toBe('5,3,1,1');

    expect(maxHeap.poll()).toBe(5);
    expect(maxHeap.toString()).toBe('3,1,1');

    expect(maxHeap.poll()).toBe(3);
    expect(maxHeap.toString()).toBe('1,1');
  });

  it('should poll items from the heap and heapify it down', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(5);
    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(1);

    expect(maxHeap.toString()).toBe('11,10,5,3,1');

    expect(maxHeap.poll()).toBe(11);
    expect(maxHeap.toString()).toBe('10,3,5,1');

    expect(maxHeap.poll()).toBe(10);
    expect(maxHeap.toString()).toBe('5,3,1');

    expect(maxHeap.poll()).toBe(5);
    expect(maxHeap.toString()).toBe('3,1');

    expect(maxHeap.poll()).toBe(3);
    expect(maxHeap.toString()).toBe('1');

    expect(maxHeap.poll()).toBe(1);
    expect(maxHeap.toString()).toBe('');

    expect(maxHeap.poll()).toBeNull();
    expect(maxHeap.toString()).toBe('');
  });

  it('should heapify down through the right branch as well', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);

    expect(maxHeap.toString()).toBe('12,3,10');

    maxHeap.add(11);
    expect(maxHeap.toString()).toBe('12,11,10,3');

    expect(maxHeap.poll()).toBe(12);
    expect(maxHeap.toString()).toBe('11,3,10');
  });

  it('should be possible to find item indices in heap', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.toString()).toBe('12,11,10,3,11');

    expect(maxHeap.find(5)).toEqual([]);
    expect(maxHeap.find(12)).toEqual([0]);
    expect(maxHeap.find(11)).toEqual([1, 4]);
  });

  it('should be possible to remove items from heap with heapify down', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(12);
    maxHeap.add(10);
    maxHeap.add(11);
    maxHeap.add(11);

    expect(maxHeap.toString()).toBe('12,11,10,3,11');

    expect(maxHeap.remove(12).toString()).toEqual('11,11,10,3');
    expect(maxHeap.remove(12).peek()).toEqual(11);
    expect(maxHeap.remove(11).toString()).toEqual('10,3');
    expect(maxHeap.remove(10).peek()).toEqual(3);
  });

  it('should be possible to remove items from heap with heapify up', () => {
    const maxHeap = new MaxHeap();

    maxHeap.add(3);
    maxHeap.add(10);
    maxHeap.add(5);
    maxHeap.add(6);
    maxHeap.add(7);
    maxHeap.add(4);
    maxHeap.add(6);
    maxHeap.add(8);
    maxHeap.add(2);
    maxHeap.add(1);

    expect(maxHeap.toString()).toBe('10,8,6,7,6,4,5,3,2,1');
    expect(maxHeap.remove(4).toString()).toEqual('10,8,6,7,6,1,5,3,2');
    expect(maxHeap.remove(3).toString()).toEqual('10,8,6,7,6,1,5,2');
    expect(maxHeap.remove(5).toString()).toEqual('10,8,6,7,6,1,2');
    expect(maxHeap.remove(10).toString()).toEqual('8,7,6,2,6,1');
    expect(maxHeap.remove(6).toString()).toEqual('8,7,1,2');
    expect(maxHeap.remove(2).toString()).toEqual('8,7,1');
    expect(maxHeap.remove(1).toString()).toEqual('8,7');
    expect(maxHeap.remove(7).toString()).toEqual('8');
    expect(maxHeap.remove(8).toString()).toEqual('');
  });

  it('should be possible to remove items from heap with custom finding comparator', () => {
    const maxHeap = new MaxHeap();
    maxHeap.add('a');
    maxHeap.add('bb');
    maxHeap.add('ccc');
    maxHeap.add('dddd');

    expect(maxHeap.toString()).toBe('dddd,ccc,bb,a');

    const comparator = new Comparator<string>((a, b) => {
      if (a.length === b.length) {
        return 0;
      }

      return a.length < b.length ? -1 : 1;
    });

    maxHeap.remove('hey', comparator);
    expect(maxHeap.toString()).toBe('dddd,a,bb');
  });
})
