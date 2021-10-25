export default class DisjointSet {
  root: Array<number> = [];
  rank: Array<number> = [];
  size: number = 0;

  add(x: number) {
    if (!this.root.includes(x)) {
      this.root.push(x);
      this.rank.push(1);
      this.size += 1;
    }
  }

  constructor() {}

  find(x: number): number {
    if (x == this.root[x]) {
      return x;
    }
    return this.root[x] = this.find(this.root[x]);
  }

  union(x: number, y: number): void {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    this.size -= 1;

    if (this.rank[rootX] > this.rank[rootY]) {
      this.root[rootY] = rootX;
    } else if (this.rank[rootY] > this.rank[rootX]) {
      this.root[rootX] = rootY;
    } else {
      this.root[rootY] = rootX;
      this.rank[rootX] += 1;
    }
  }

  connected(x: number, y: number): boolean {
    return this.find(x) === this.find(y);
  }
}
