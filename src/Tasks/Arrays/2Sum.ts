// List all the indices, which sum to target
type Hash = {[value: number]: Array<number>}

export const twoSum = (arr: number[], target = 0) => {
  const sorted = [...arr].sort((a, b) => a - b);
  const hash: Hash = {};
  let signBorderIndex = null;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    hash[value] = hash[value] || [];
    hash[value].push(i)

    if (value > 0 && signBorderIndex == null) {
        signBorderIndex = i;
    }
  }

  const result = [];
  for (let i = 0; i < sorted.length; i++) {
    const currentValue = sorted[i];
    const complementValue = target - currentValue;

    hash[complementValue] = hash[complementValue] || [];

    if (hash[complementValue].length > 0 && hash[currentValue].length > 0) {
      const complementIndex = hash[complementValue].pop();
      const currentIndex = hash[currentValue].pop();
      result.push([currentIndex, complementIndex]);
    }
  }

  return result;
};
