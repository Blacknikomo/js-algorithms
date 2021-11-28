// https://leetcode.com/problems/largest-component-size-by-common-factor/

// You are given an integer array of unique positive integers nums. Consider the following graph:
//
//   There are nums.length nodes, labeled nums[0] to nums[nums.length - 1],
//   There is an undirected edge between nums[i] and nums[j] if nums[i] and nums[j] share a common factor greater than 1.
// Return the size of the largest connected component in the graph.
// class DS {
//   private root = [];
//   private size = 0;
//
//   constructor() {
//
//   }
//
//   add(x: number) {
//     if (this.root.includes(x)) {
//       this.root.push(x);
//       this.size++;
//     }
//   }
//
//   find(x: number) {
//     if (x == this.root[x]) {
//       return x;
//     }
//
//     this.root[x] = this.find(this.root[x]);
//   }
//
//   connected(x: num, y: num): boolean {
//     this.find[x] === this.find[y];
//   }
//
//   union(x: num, y: num) {
//     const rootX = this.root[x];
//     const rootY = this.root[y];
//
//     if (rootX == rootY) {
//       return;
//     }
//
//     this.root[rootY] = rootX;
//   }
// }

import DisjointSet from "../../../Graphs/DisjointSet/DisjointSet";

function haveCommonFactor(x: number, y: number): boolean {
  const factors = {}

  for (let i = 2; i <= Math.sqrt(x) + 1; i++) {
    if (x % i === 0) {
      const factor1 = i;
      const factor2 = x / i;

      factors[factor1] = factors[factor1] ? factors[factor1] + 1 : 1
      if (factor1 != factor2) {
        factors[factor2] = factors[factor2] ? factors[factor2] + 1 : 1
      }

    }
  }

  for (let i = 2; i <= Math.sqrt(y) + 1; i++) {
    if (y % i === 0) {
      const factor1 = i;
      const factor2 = y / i;

      factors[factor1] = factors[factor1] ? factors[factor1] + 1 : 1
      if (factor1 != factor2) {
        factors[factor2] = factors[factor2] ? factors[factor2] + 1 : 1
      }
    }
  }

  return !!Object.values(factors).find(item => item > 1) || (x % y === 0 && (x > 1 || y > 1)) || (y % x === 0 && (x > 1 || y > 1));
}

export function largestComponentSize(nums: number[]): number {
  const uf = new DisjointSet();
  const max = nums.reduce((prev, curr) => Math.max(prev, curr));
  for (let i = 0; i <= max; i++) {
    uf.add(i)
  }

  for (let i = 0; i < nums.length - 1; i++) {
    const currentElement = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const nextElement = nums[j];

      if (haveCommonFactor(currentElement, nextElement)) {
        uf.union(currentElement, nextElement);
      }
    }
  }

  const hash = uf.root.reduce((acc, curr) => {
    if (acc[curr] != null) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    return acc
  }, {});



  // @ts-ignore
  return Object.values(hash).reduce((prev, curr) => Math.max(prev, curr));
}
