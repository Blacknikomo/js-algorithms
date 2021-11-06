export const solveKnapsackBrute = function(profits: Array<number>, weights: Array<number>, capacity: number) {
  const addItemTo = (capacityLeft: number, index: number): number => {
    if (capacityLeft <= 0 || index >= profits.length) {
      return 0;
    }

    let profitForCurrentItem = 0;

    if (weights[index] <= capacityLeft) {
      profitForCurrentItem = profits[index] + addItemTo(capacityLeft - weights[index], index + 1);
    }

    const profitForRestItems = addItemTo(capacityLeft, index + 1);

    return Math.max(profitForCurrentItem, profitForRestItems)
  }


  return addItemTo(capacity, 0);
};

export const solveKnapsackTopToBottom = function(profits: Array<number>, weights: Array<number>, capacity: number) {
  const dp: number[][] = [];
  const addItemTo = (capacityLeft: number, index: number): number => {
    if (capacityLeft <= 0 || index >= profits.length) {
      return 0;
    }

    if (dp[capacityLeft] == null) {
      dp[capacityLeft] = [];
    }

    if (dp[capacityLeft][index] != null) {
      return dp[capacityLeft][index];
    }

    let profitForCurrentItem = 0;

    if (weights[index] <= capacityLeft) {
      profitForCurrentItem = profits[index] + addItemTo(capacityLeft - weights[index], index + 1);
    }

    const profitForRestItems = addItemTo(capacityLeft, index + 1);
    dp[capacityLeft][index] = Math.max(profitForCurrentItem, profitForRestItems)
    return dp[capacityLeft][index]
  }

  return addItemTo(capacity, 0);
};


export const solveKnapsackBottomUp = function(profits: Array<number>, weights: Array<number>, capacity: number) {
  const dp: number[][] = [];
  for (let i = 0; i < weights.length; i++) {

  }
  const addItemTo = (capacityLeft: number, index: number): number => {
    if (capacityLeft <= 0 || index >= profits.length) {
      return 0;
    }

    if (dp[capacityLeft] == null) {
      dp[capacityLeft] = [];
    }

    if (dp[capacityLeft][index] != null) {
      return dp[capacityLeft][index];
    }

    let profitForCurrentItem = 0;

    if (weights[index] <= capacityLeft) {
      profitForCurrentItem = profits[index] + addItemTo(capacityLeft - weights[index], index + 1);
    }

    const profitForRestItems = addItemTo(capacityLeft, index + 1);
    dp[capacityLeft][index] = Math.max(profitForCurrentItem, profitForRestItems)
    return dp[capacityLeft][index]
  }

  return addItemTo(capacity, 0);
};

