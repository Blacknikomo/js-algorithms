// The idea is same to Can Sum, but we should pass the real combinations, not just a boolean
export const howSumBruteForce = (target: number, nums: Array<number>): number[][] | boolean | null => {
  // const calculate = (left: number, nums: Array<number>): number[] | boolean => {
    if (target < 0) return false
    if (target == 0) return true

    let digits = [];

    for (let num of nums) {
      const can = howSumBruteForce(target - num, nums);

      if (can === true) {
        digits.push([num])
      }

      if (Array.isArray(can)) {
          can.forEach((item) => digits.push([...item, num]))
      }

    }

    return digits.length ? digits : false;
  // }
}
