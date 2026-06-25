// https://leetcode.com/problems/3sum/

// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.


/**
 * @param {number[]} nums
 * @return {number[][]}
 */


var threeSum = function (nums) {
  // IMPORTANT: JS sort() sorts as strings by default.
  // Without the comparator, [-1, 0, 10, 2] is possible.
  nums.sort((a, b) => a - b);

  const ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Optimization:
    // After sorting, if current number > 0,
    // all remaining numbers are also > 0.
    // Sum can never become 0.
    if (nums[i] > 0) break;

    // Skip duplicate first elements.
    // Prevents duplicate triplets.
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];

      if (sum < 0) {
        // Need a larger sum.
        j++;
      } else if (sum > 0) {
        // Need a smaller sum.
        k--;
      } else {
        // Found a valid triplet.
        ans.push([nums[i], nums[j], nums[k]]);

        // Skip duplicate second elements.
        // Example: [..., -1, -1, ...]
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }

        // Skip duplicate third elements.
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }

        // Move both pointers to search for next pair.
        j++;
        k--;
      }
    }
  }

  return ans;
};
