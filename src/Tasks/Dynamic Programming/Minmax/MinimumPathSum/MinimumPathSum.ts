export const minimumPathSum = (matrix: number[][]) => {
  const memo = [];
  const cols = matrix[0].length;
  const rows = matrix.length;

  const calculate = ([v, h]: number[]) => {
    if (v === rows - 1 && h === cols - 1) {
      return matrix[v][h];
    }


    memo[v] = memo[v] || [];

    if (memo[v][h] != null) {
      return memo[v][h]
    }

    let sumRight = Number.MAX_SAFE_INTEGER;
    if (h < cols - 1) {
      sumRight = matrix[v][h] + calculate([v, h + 1])
    }

    let sumBottom = Number.MAX_SAFE_INTEGER;
    if (v < rows - 1) {
      sumBottom = matrix[v][h] + calculate([v + 1, h])
    }

    memo[v][h] = Math.min(sumBottom, sumRight);
    return memo[v][h];
  }

  return calculate([0, 0])
}
