import DisjointSet, {TWEAKS} from "./DisjointSet";

export function buildGraph(n: number, edges: number[][]): DisjointSet {
  const union = new DisjointSet(TWEAKS.GRAPH)

  Array.from(new Array(n), (_, i) => union.add(i));

  for (let i = 0; i < edges.length; i++) {
    union.union(edges[i][0], edges[i][1]);
  }

  return union;
}
