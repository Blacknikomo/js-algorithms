export const minPathTriangle = (triangle: number[][]): number => {
  const dp = [];

  const calculate = ([row, column]: number[]) => {
    if (row === (triangle.length - 1)) {
      return triangle[row][column];
    }

    dp[row] = dp[row] || [];

    if (dp[row][column]) {
      return dp[row][column];
    }

    const leftSum = triangle[row][column] + calculate([row + 1, column]);
    const rightSum = triangle[row][column] + calculate([row + 1, column + 1]);


    dp[row][column] = Math.min(leftSum, rightSum);
    return dp[row][column];
  }

  return calculate([0, 0]);
};
