export const mergeSortTopToBottom = (nums: number[]): number[] => {
  if (nums.length < 2) {
    return nums;
  }

  if (nums.length == 2) {
    const left = nums[0];
    const right = nums[1];

    return left > right ? [nums[1], nums[0]] : nums;
  }

  const middleIndex = Math.floor(nums.length / 2);

  const sortedLeft = mergeSortTopToBottom(nums.slice(0, middleIndex));
  const sortedRight = mergeSortTopToBottom(nums.slice(middleIndex));
  const result = [];

  let leftPointer = 0;
  let rightPointer = 0;

  while(result.length < (sortedLeft.length + sortedRight.length)) {
    const currentLeftElement = sortedLeft[leftPointer];
    const currentRightElement = sortedRight[rightPointer];

    if (isNaN(currentLeftElement)) {
      rightPointer++;
      result.push(currentRightElement);
      continue;
    }

    if (isNaN(currentRightElement)) {
      leftPointer++;
      result.push(currentLeftElement);
      continue;
    }

    const minValue = Math.min(currentLeftElement, currentRightElement);
    result.push(minValue);

    if (minValue === currentLeftElement) leftPointer++;
    else rightPointer++;
  }

  return result
}

export const mergeSortBottomUp = (nums: number[]): number[] => {
  for (let i = 0; i < nums.length; i++) {

  }

  return [];
}
