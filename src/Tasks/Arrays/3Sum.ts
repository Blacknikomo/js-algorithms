//0 <= nums.length <= 3000
// -105 <= nums[i] <= 105

function twoSum(nums: number[], i: number, result: number[][]) {
  let left = i + 1;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[i] + nums[left] + nums[right];
    if (sum < 0) left++;
    else if (sum > 0) right--;
    else {
      result.push([nums[i], nums[left++], nums[right--]]);
      while (left < right && nums[left] == nums[left - 1]) {
        left++;
      }
    }
  }
}

export function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let i = 0; i < nums.length && nums[i] <= 0; i++) {
    if (i == 0 || nums[i - 1] != nums[i]) {
      twoSum(nums, i, result);
    }
  }

  return result;
};
