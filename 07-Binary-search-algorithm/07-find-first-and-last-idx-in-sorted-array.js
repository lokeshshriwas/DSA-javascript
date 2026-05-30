// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/

// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]

// Constraints:

// 0 <= nums.length <= 105
// -109 <= nums[i] <= 109
// nums is a non-decreasing array.
// -109 <= target <= 109

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  let ans = [-1, -1];
  // Split the binary search into 2 halfs and run 2 searches
  // left dominate search to find starting idx
  while (l < r) {
    let m = l + Math.floor((r - l) / 2);
    if (nums[m] < target) l = m + 1;
    else r = m;
  }
  // cross verify if the value is equal to target or not
  if (nums[l] == target) ans[0] = l;

  // Reset the pointers
  l = 0;
  r = nums.length - 1;
  // right dominate search to find ending idx
  while (l < r) {
    let m = l + Math.ceil((r - l) / 2);
    if (nums[m] > target) r = m - 1;
    else l = m;
  }
  // cross verify if the value is equal to target or not
  if (nums[r] == target) ans[1] = r;

  // return ans if blank then return [-1,-1]
  return ans;
};


/////////////////////////// Greedy Approach (same time complexity) \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange1 = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let ans = [-1, -1];
    

    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] == target) {
            ans[0] = m;
            r = m - 1;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    l = 0;
    r = nums.length - 1;
    
    while (l <= r) {
        let m = l + Math.floor((r - l) / 2);
        if (nums[m] == target) {
            ans[1] = m;
            l = m + 1;
        } else if (nums[m] < target) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return ans;
};