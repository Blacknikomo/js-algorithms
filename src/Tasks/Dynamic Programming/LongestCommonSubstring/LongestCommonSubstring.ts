export function longestCommonSubsequence(text1: string, text2: string, memo = {}): number {
  if (!text1.length || !text2.length) return 0;
  const key = `${text1}_${text2}`;

  if (key in memo) return memo[key];

  const letter1 = text1[0];
  const letter1Index = text2.indexOf(letter1);

  const including = longestCommonSubsequence(text1.slice(1), text2, memo);
  const excluding = letter1Index >= 0 ? longestCommonSubsequence(text1.slice(1), text2.slice(letter1Index + 1), memo) + 1 : 0;

  memo[key] = Math.max(including, excluding);
  return memo[key];
}
