// Given a set of positive numbers, determine if there exists a subset whose sum is equal to a given number ‘S’.
export const solveSubsetSumBruteForce = (numbers: Array<number>, s: number) => {
  const divideArray = (currentSum: number, index: number) => {
    if (currentSum === 0) return true;
    if (index >= numbers.length) return false;

    if (numbers[index] <= currentSum) {
      if (divideArray(currentSum - numbers[index], index + 1)) return true
    }

    return divideArray(currentSum, index + 1);
  }

  return divideArray(s, 0)
}

export const solveSubsetSumTopToBottom = (numbers: Array<number>, s: number) => {
  const dp: boolean[][] = [];
  const divideArray = (currentSum: number, index: number) => {
    if (currentSum === 0) return true;
    if (index >= numbers.length) return false;

    dp[index] = dp[index] || []
    if (dp[index][currentSum] != null) {
      return dp[index][currentSum]
    }

    if (numbers[index] <= currentSum) {
      dp[index][currentSum] = (divideArray(currentSum - numbers[index], index + 1))
      if (dp[index][currentSum]) return true
    }

    dp[index][currentSum] = (divideArray(currentSum, index + 1))
    return dp[index][currentSum];
  }

  return divideArray(s, 0)
}


export const solveSubsetSumBottomUp = (numbers: Array<number>, sum: number) => {
  // Initialization
  const dp: boolean[][] = Array(numbers.length).fill(false).map(() => Array(sum + 1).fill(false));

  // Mark first column true (0 value could be achieved through the empty set)
  numbers.forEach((_, index) => dp[index][0] = true);

  // If only one element is allowed - we can precalculate it with O(n)
  for (let s = 1; s <= sum; s++) {
    dp[0][s] = numbers[0] === s;
  }

  for (let i = 1; i < numbers.length; i++) {
    for (let s = 1; s <= sum; s++) {
      if (dp[i - 1][s]) {
        // If the value been cached before:
        dp[i][s] = dp[i - 1][s];
      } else if (s >= numbers[i]) {
        // Else calculate it from the scratch
        dp[i][s] = dp[i - 1][s - numbers[i]]
      }
    }
  }

  return dp[numbers.length - 1][sum];
}
