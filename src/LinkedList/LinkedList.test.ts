import LinkedList from "./LinkedList";

describe("Linked lists", () => {
  it("Created and 5 items pushed", () => {
    const list = new LinkedList<number>();
    Array.from({length: 5}, (_, i) => list.add(i));

    const {head} = list.getInternals();
    expect(head.next.next.next.next.value).toBe(4);
  });

  it("List with 1 element. Find second.", () => {
    const list = new LinkedList<number>();
    Array.from({length: 1}, (_, i) => list.add(i));

    expect(list.find(1)).toBe(null);
  });

  it("Found correct element in list with 5 elements", () => {
    const list = new LinkedList<number>();
    Array.from({length: 5}, (_, i) => list.add(i));

    expect(list.find(3)).toBe(3);
  });

  it("Deleting last element", () => {
    const list = new LinkedList<number>();
    Array.from({length: 5}, (_, i) => list.add(i));

    list.delete(4);
    const {tail} = list.getInternals()
    expect(tail.value).toBe(3);
  });


  it("Deleting element in the middle", () => {
    const list = new LinkedList<number>();
    Array.from({length: 5}, (_, i) => list.add(i));

    list.delete(2);
    const {head} = list.getInternals()
    expect(head.next.next.value).toBe(3);
  });


  it("Added an element to the beginning of the list", () => {
    const list = new LinkedList<number>();
    Array.from({length: 5}, (_, i) => list.add(i));

    list.prepend(6);
    const {head} = list.getInternals()
    expect(head.value).toBe(6);
  });

})
