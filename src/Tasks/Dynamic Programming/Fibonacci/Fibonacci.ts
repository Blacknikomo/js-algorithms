const fibBuf = {};
export const fib = (n) => {
  if (n === 1) {
    return 1;
  }

  if (n === 0) {
    return 0;
  }

  if (fibBuf[n] != null) {
    return fibBuf[n];
  }

  const result = fib(n - 1) + fib(n - 2);
  fibBuf[n] = result;

  return result;
}

export const fibBottomUp = (n) => {
  const dp = [0, 1]

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n];
}
