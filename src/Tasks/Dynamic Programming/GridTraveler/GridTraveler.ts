export const gridTravelerBruteForce = (m: number, n: number): number => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  return gridTravelerBruteForce(m - 1, n) + gridTravelerBruteForce(m, n -1);
}

// @ts-ignore
export const gridTravelerTopDown = (m: number, n: number, memo = {}): number => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  const key = `${m},${n}`;

  if (key in memo) return memo[key];

  memo[key] = gridTravelerTopDown(m - 1, n, memo) + gridTravelerTopDown(m, n -1, memo);
  return memo[key];
}

// @ts-ignore
export const gridTravelerBottomUp = (m: number, n: number): number => {
  return 5;
}
