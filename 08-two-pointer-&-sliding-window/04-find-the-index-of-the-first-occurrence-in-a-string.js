// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 10^4
// haystack and needle consist of only lowercase English characters.

///////////////////////////// We can solve it using sliding window approach as well with O(n^2) time complexity and O(0) time complexity \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

///////////////////////////// Most optimized approach with O(n) time and space complexity \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // Step 1 : Longest prefix that is also suffix
  let n = haystack.length;
  let m = needle.length;
  let i = 0;
  let j = 1;
  let lps = [0];

  while (j < m) {
    if (needle[i] == needle[j]) {
      lps[j] = i + 1;
      (++i, ++j);
    } else {
      if (i == 0) {
        lps[j] = 0;
        ++j;
      } else {
        i = lps[i - 1];
      }
    }
  }

  // step 2: Compare haystack, needle with lps array

  i = j = 0;
  while (i < n) {
    if (haystack[i] == needle[j]) {
      ++i;
      ++j;
    } else {
      if (j == 0) {
        ++i;
      } else {
        j = lps[j - 1];
      }
    }
    // if length of needle and j is equal then return current haystack index - needle length
    if (j == m) {
      return i - m;
    }
  }
  // If no match found return -1
  return -1;
};
