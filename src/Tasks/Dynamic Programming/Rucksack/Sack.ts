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

    console.log(capacityLeft, index, profitForRestItems, profitForCurrentItem)
    return Math.max(profitForCurrentItem, profitForRestItems)
  }


  return addItemTo(capacity, 0);
};

