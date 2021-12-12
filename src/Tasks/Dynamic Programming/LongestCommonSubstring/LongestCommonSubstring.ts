// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.

export function longestCommonSubsequence(text1: string, text2: string): number {
  if (!text1.length || !text2.length) return 0;

  const [shortest, longest] = [text1, text2].sort((a, b) => a.length - b.length);
  let memo = [];

  for (let start = 0; start < shortest.length; start++) {
    let lastFoundIndex = -1;

    for (let i = start; i < shortest.length; i++) {
      const letter = shortest[i];
      for (let j = lastFoundIndex + 1; j < longest.length; j++) {
        if (longest[j] === letter) {
          lastFoundIndex = j;
          memo[start] = memo[start] ? memo[start] + 1 : 1
          break;
        }
      }
    }
  }

  console.log(memo.join("|"));
  return memo.sort((a, b) => b - a)[0] || 0;
}
