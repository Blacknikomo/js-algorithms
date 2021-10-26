function DisjointSet() {
  this.root = [];
  this.size = 0;

  this.add = (x: number) => {
    if (!this.root.includes(x)) {
      this.root.push(x);
      this.size++;
    }
  }

  this.find = (x: number) => {
    if (x === this.root[x]) {
      return x;
    }

    return this.root[x] = this.find(this.root[x]);
  }

  this.union = (x: number, y: number) => {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootY == rootX) {
      return;
    }

    this.size -= 1;
    this.root[rootY] = rootX;
  }

  this.connected = (x: number, y: number) => {
    return this.find(x) === this.find(y);
  }
}
DisjointSet.prototype.constructor = DisjointSet;

export default function validTree(n: number, edges: number[][]): boolean {
  const set = new DisjointSet();

  Array.from(new Array(n), (_, i) => i).forEach(n => set.add(n));

  let isTree = true;
  const length = edges.length;

  for (let i = 0; i < length; i++) {
    const v1 = edges[i][0];
    const v2 = edges[i][1];
    const connected = set.connected(v1, v2);
    if (connected && v1 != v2) {
      isTree = false;
      break;
    }
      set.union(v1, v2);
  }

  return isTree && set.size === 1
}

