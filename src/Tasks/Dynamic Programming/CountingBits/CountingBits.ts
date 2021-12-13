export function countingBits(n: number): number[] {
  if (n == 0) return [0];
  if (n == 1) return [0, 1];

  const memo = [0, 1];
  let latestPower = 0;

  for (let i = 2; i <= n; i++) {
    const bits = Number(i).toString(2);
    if (bits[bits.length - 1] === '1') {
      if (i - 1 === Math.pow(2, latestPower)) {
        memo[i] = 1;
        latestPower += 1;
      } else {
        memo[i] = memo[i - 1];
      }
    } else {
      memo[i] = memo[i - 1] + 1;
    }
  }

  return memo;
}

// 0                0
// 0 1              1
// 0 1 0
// 0 1 1            2
// 0 0 0 1
// 0 0 1 0
// 0 0 1 1
// 0 1 0 0
// 0 1 0 1
// 0 1 1 0
// 0 1 1 1        3
// 0 0 0 0 1
// ...
// 0 1 1 1 1      4
