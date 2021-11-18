// const twoSum = (arr: number[], target = 0) => {
//   const result = [];
//   const hash = {};
//
//   for (let i = 0; i < arr.length; i++) {
//     const value = arr[i];
//     hash[value] = hash[value] || [];
//     hash[value].push(i)
//   }
//
//   for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];
//     const complementValue = target - currentValue;
//
//     hash[complementValue] = hash[complementValue] || [];
//
//     if (
//       complementValue != currentValue &&
//       hash[complementValue].length > 0 && hash[currentValue].length > 0 ||
//       complementValue == currentValue == hash[complementValue].length > 1
//     ) {
//       const complementIndex = hash[complementValue].pop();
//       const currentIndex = hash[currentValue].pop();
//       currentIndex != null &&
//       complementIndex != null &&
//       result.push([currentValue, complementValue]);
//     }
//   }
//
//   return result;
// };

// const twoSum = (arr: number[], target = 0, hash = {}) => {
//   const result = [];
//
//   for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];
//     const complementValue = target - currentValue;
//
//     hash[complementValue] = hash[complementValue] || [];
//
//     if (
//       complementValue != currentValue &&
//       hash[complementValue].length > 0 && hash[currentValue].length > 0 ||
//       complementValue == currentValue == hash[complementValue].length > 1
//     ) {
//       const complementIndex = hash[complementValue].pop();
//       const currentIndex = hash[currentValue].pop();
//       currentIndex != null &&
//       complementIndex != null &&
//       result.push([currentValue, complementValue]);
//     }
//   }
//
//   return result;
// };
//
// export function threeSum(nums: number[]): number[][] {
//   const result = [];
//   const hash = {};
//
//   for (let i = 0; i < nums.length; i++) {
//     const value = nums[i];
//     hash[value] = hash[value] || [];
//     hash[value].push(i)
//   }
//
//   for (let i = 0; i < nums.length - 2; i++) {
//     const value = nums[i];
//     const target = 0 - value;
//
//     let buf = hash[value].pop();
//     const res = twoSum(nums.slice(i + 1), target, hash);
//
//     res.forEach(item => {
//       if (buf != null) {
//         result.push([value, ...item])
//         buf = hash[value].pop()
//       }
//     });
//   }
//
//   return result;
// }

const twoSum = (nums, i) => {
  const seen = {};
  const result = [];
  // void twoSum(int[] nums, int i, List<List<Integer>> res) {
  //   var seen = new HashSet<Integer>();
  //   for (int j = i + 1; j < nums.length; ++j) {
  //     int complement = -nums[i] - nums[j];
  //     if (seen.contains(complement)) {
  //       res.add(Arrays.asList(nums[i], nums[j], complement));
  //       while (j + 1 < nums.length && nums[j] == nums[j + 1])
  //         ++j;
  //     }
  //     seen.add(nums[j]);
  //   }
  // }

  for (let j = i + 1; j < nums.length; ++j) {
    const complement = -nums[i] - nums[j];
    if (seen[complement] != null) {
      result.push(nums[i], nums[j], complement);

      while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
        ++j;
      }
    }
    seen[nums[j]] = true;
  }

  return result;
};

export function threeSum(nums: number[]): number[][] {
  const result = [];
  const sorted = [...nums].sort((a, b) => a - b);

  for (let i = 0; i < sorted.length && nums[i] <= 0; ++i) {
    if (i == 0 || sorted[i - 1] != sorted[i]) {
      const sum = twoSum(sorted, i);
      sum.length > 0 && result.push(sum);
    }
  }

  return result;
}
