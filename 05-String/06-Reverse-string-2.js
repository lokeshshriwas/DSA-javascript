// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:

// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
// Example 2:

// Input: s = "abcd", k = 2
// Output: "bacd"

// Constraints:

// 1 <= s.length <= 104
// s consists of only lowercase English letters.
// 1 <= k <= 104

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  // convert string to array
  s = s.split("");

  // Jump 4 steps in every iteration
  for (let x = 0; x < s.length; x = x + 2 * k) {
    // mid will be constant calculated just once same number every time
    let mid = k / 2;

    // Run loop till mid of k times and swap 1st with last and move forward
    for (let i = 0; i < mid; i++) {
      let temp = s[x + i];
      s[x + i] = s[x + k - i - 1];
      s[x + k - i - 1] = temp;
    }
  }

  // Join the array again and return a string
  return s.join("");
};
