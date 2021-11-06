function recursion(numbers: Array<number>, sum: number, index: number) {
  if (sum == 0) {
    return true;
  }

  if (numbers.length == 0 || index >= numbers.length) {
    return false;
  }

  if (numbers[index] <= sum) {
    if (recursion(numbers, sum - numbers[index], index++)) return true
  }

  return recursion(numbers, sum, index++)
}

export const solveEqualSubsetBruteForce = (numbers: Array<number>): boolean => {
  if (numbers.length < 2) {
    return !numbers.length;
  }

  const sum = numbers.reduce((acc, current) => acc + current);
  if (sum % 2 != 0) return false

  return recursion(numbers, sum / 2, 0);
}
