function expand(i, j, square) {

}

export function maximalSquare(square: string[][]): number {
  for (let i = 0; i < square.length; i++) {
    for (let j = 0; j < square[i].length; j++) {
      if (square[i][j] === '1') {
        expand(i, j, square)
      }
      else continue;
    }
  }
}

// 1 0 1
// 1 1 1
// 1 1 1
//
// 1 1 1
// 1 1 1
// 1 1 1
