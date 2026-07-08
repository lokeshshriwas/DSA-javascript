// https://leetcode.com/problems/longest-repeating-character-replacement/description/

// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Constraints:

// 1 <= s.length <= 10^5
// s consists of only uppercase English letters.
// 0 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // Add a hashmap or object to store the frequence and occurance of any char max(26) size
  let count = {};

  // define max frequency left and response or answer with 0

  let maxf = (l = res = 0);

  // run the loop wile r is available
  for (let r = 0; r < s.length; r++) {
    // store frequency on map
    count[s[r]] = 1 + (count[s[r]] || 0);

    // also calculate max frequency in the string
    maxf = Math.max(maxf, count[s[r]]);

    // Look for while max freqency and length is overpassing k and move left accordingly
    while (r - l + 1 - maxf > k) {
      count[s[l]]--;
      l++;
    }

    // find max with valid right and left ends and add 1 because of 0 indexing in js
    res = Math.max(res, r - l + 1);
  }

  return res;
};
