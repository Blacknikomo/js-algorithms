export const canSumBruteForce = (target: number, nums: Array<number>): boolean => {
  if (target < 0) return false;
  if (target === 0) return true;

  let result = false;

  for (let num of nums) {
    const can = canSumBruteForce(target - num, nums);

    if (can) {
      result = can;
    }
  }

  return result;
}

export const canSumTopBottom = (target: number, nums: Array<number>, memo = {}): boolean => {
  if (target < 0) return false;
  if (target === 0) return true;

  if (target in memo) return memo[target];


  let result = false;

  for (let num of nums) {
    const can = canSumTopBottom(target - num, nums, memo);

    if (can) {
      result = can;
    }
  }

  memo[target] = result;
  return memo[target];
}
