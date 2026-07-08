// https://leetcode.com/problems/permutation-in-string/

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.

// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").
// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  let hashS = Array(26).fill(0);
  let hashW = Array(26).fill(0);
  let window_length = s1.length;

  for (let i = 0; i < window_length; i++) {
    // 97 is the character code of small a;
    ++hashS[s1.charCodeAt(i) - 97];
    ++hashW[s2.charCodeAt(i) - 97];
  }

  let i = 0;
  let j = window_length - 1;

  while (s2.length > j) {
    if (hashMatching(hashS, hashW)) {
      return true;
    } else {
      --hashW[s2.charCodeAt(i) - 97];
      ++i;
      ++j;
      ++hashW[s2.charCodeAt(j) - 97];
    }
  }
  return false;
};

function hashMatching(h1, h2) {
  for (let i = 0; i < 26; i++) {
    if (h1[i] !== h2[i]) {
      return false;
    }
  }
  return true;
}
