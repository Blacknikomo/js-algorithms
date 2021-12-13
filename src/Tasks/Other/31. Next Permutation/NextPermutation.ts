/**
 Do not return anything, modify nums in-place instead.
 */
export function nextPermutation(nums: number[]): void {
  let latestGrowingIndex = -1;
  let minNumberBiggerThanIndex = -1;

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];
    const next = nums[i + 1];

    if (current < next) {
      latestGrowingIndex = i;
      minNumberBiggerThanIndex = i + 1;
      continue;
    }

    if (current > nums[latestGrowingIndex] && current < nums[minNumberBiggerThanIndex]) {
      minNumberBiggerThanIndex = i;
      continue;
    }

    if (next > nums[latestGrowingIndex] && next < nums[minNumberBiggerThanIndex]) {
      minNumberBiggerThanIndex = i + 1;
    }
  }

  if (latestGrowingIndex === -1) {
    nums.sort((a, b) => a - b);
    return;
  }

  const buf = nums[latestGrowingIndex];
  nums[latestGrowingIndex] = nums[minNumberBiggerThanIndex];
  nums[minNumberBiggerThanIndex] = buf;

  for (let i = nums.length - 1; i > latestGrowingIndex; i--) {
    for (let j = latestGrowingIndex + 1; j < nums.length - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        const buf = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = buf;
      }
    }
  }
}
