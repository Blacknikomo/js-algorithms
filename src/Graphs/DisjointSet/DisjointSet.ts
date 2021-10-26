export enum TWEAKS {
  OPTIMIZED,
  GRAPH
}

export default class DisjointSet {
  root: Array<number> = [];
  rank: Array<number> = [];
  size: number = 0;

  strategy: TWEAKS

  add(x: number) {
    if (!this.root.includes(x)) {
      this.root.push(x);
      this.rank.push(1);
      this.size += 1;
    }
  }

  constructor(strategy: TWEAKS = TWEAKS.OPTIMIZED) {
    this.strategy = strategy;
  }

  find(x: number): number {
    switch (this.strategy) {
      case TWEAKS.OPTIMIZED: {
        if (x == this.root[x]) {
          return x;
        }
        return this.root[x] = this.find(this.root[x]);
      }
      case TWEAKS.GRAPH: {
        while (x !== this.root[x]) {
          x = this.root[x];
        }

        return x;
      }
    }
  }

  union(x1: number, x2: number): void {
    const rootX = this.find(x1);
    const rootY = this.find(x2);

    if (rootX === rootY) {
      return;
    }

    this.size -= 1;

    switch (this.strategy) {
      case TWEAKS.OPTIMIZED: {
        if (this.rank[rootX] > this.rank[rootY]) {
          this.root[rootY] = rootX;
        } else if (this.rank[rootY] > this.rank[rootX]) {
          this.root[rootX] = rootY;
        } else {
          this.root[rootY] = rootX;
          this.rank[rootX] += 1;
        }
        break;
      }

      case TWEAKS.GRAPH: {
        this.root[rootY] = rootX;
        break;
      }
    }
  }

  connected(x1: number, x2: number): boolean {
    return this.find(x1) === this.find(x2);
  }
}
