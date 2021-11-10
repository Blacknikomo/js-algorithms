export function oddEvenJumps(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let jumps = 0; // 1 exists always

  const dp: boolean[][] = []; // [index][odd/even (1/0)]

  // Greater smallest
  const oddJump = (index): number => {
    let minIndex = null;

    for (let i = index + 1; i < nums.length; i++) {
      if (
        nums[i] >= nums[index] &&
        (!minIndex || nums[i] < nums[minIndex])
      ) {
        minIndex = i;
      }
    }

    return minIndex != null ? minIndex : -1;
  }

  // Lesser (?) biggest
  const evenJump = (index): number => {
    let maxIndex = null;
    for (let i = index + 1; i < nums.length; i++) {
      if (
        nums[i] <= nums[index] &&
        (!maxIndex || nums[i] > nums[maxIndex])) {
        maxIndex = i;
      }
    }

    return maxIndex != null ? maxIndex : -1;
  }

  const canJump = (jump, index) => {
    if (index === nums.length - 1) {
      jumps++;
      return true;
    }

    const isOdd = jump % 2 === 0 ? 0 : 1;
    const nextIndex = isOdd ? oddJump(index) : evenJump(index);

    dp[index] = dp[index] || [];

    if (dp[index][isOdd] != null) {
      return dp[index][isOdd];
    }

    if (nextIndex == -1) {
      return false;
    }

    if (nextIndex === nums.length - 1) {
      jumps++;
      return true;
    }

    dp[index][isOdd] = canJump(jump + 1, nextIndex);
    return dp[index][isOdd];
  }

  // The latest jump always exists
  for (let i = 0; i < nums.length; i++) {
    canJump(1, i);
  }

  return jumps;
}
