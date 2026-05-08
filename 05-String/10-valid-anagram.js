// https://leetcode.com/problems/valid-anagram/description/

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

///////////////// standard solution using hashmap \\\\\\\\\\\\\\\\
var isAnagram = function (s, t) {
  let match = new Map();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!match.has(s[i])) {
      match.set(s[i], 1);
    } else {
      match.set(s[i], match.get(s[i]) + 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!match.has(t[i])) {
      return false;
    }
    match.set(t[i], match.get(t[i]) - 1);

    if (match.get(t[i]) < 0) {
      return false;
    }
  }
  return true;
};

///////////////// More optimized code \\\\\\\\\\\\\\\\\\\\

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  const arr = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - 97]++;
    arr[t.charCodeAt(i) - 97]--;
  }

  return arr.every((a) => a === 0);
};
