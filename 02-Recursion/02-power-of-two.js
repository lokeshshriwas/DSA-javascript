// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false

// Constraints:

// -231 <= n <= 231 - 1

// Follow up: Could you solve it without loops/recursion?

function isPowerOfTwo(n) {
  if (n == 1) return true;
  if (n < 1 || (n%2 !== 0) ) return false;
  return isPowerOfTwo(n / 2);
}

// Optimized approach
function isPowerOfTwobitwise(n) {
  return n > 0 && (n & (n - 1)) == 0;
}
console.log(isPowerOfTwobitwise(16));
