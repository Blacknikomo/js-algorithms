import DisjointSet from "../DisjointSet";

export default function earliestAcq(logs: number[][], n: number): number {
  const set = new DisjointSet();
  Array.from(new Array(n), (_, i) => set.add(i));

  let minTime = -1;
  const sortedLogs = logs.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < sortedLogs.length; i++) {
    const [time, p1, p2] = sortedLogs[i];
    set.union(p1, p2);

    if (set.size === 1) {
      minTime = time;
      break;
    }
  }

  return minTime;
};
