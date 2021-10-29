import Queue from "./Queue";

describe("Queue tests", () => {
  it("Queue is created", () => {
    const queue = new Queue();
    expect(queue).toBeInstanceOf(Queue);
  });

  it("Put 3 items in queue", () => {
    const queue = new Queue<string>()
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");

    expect(queue.size).toBe(3);
  });

  it("Get last 2 elements", () => {
    const queue = new Queue<number>()
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const el1 = queue.dequeue()
    const el2 = queue.dequeue()
    expect(el1 + el2).toBe(3);
  });


  it("Put && take 3 elements", () => {
    const queue = new Queue<number>()
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();

    expect(queue.size).toBe(0);
  });

  it("Flush works", () => {
    const queue = new Queue<number>()
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    queue.flush();

    expect(queue.size).toBe(0);
  })
})
