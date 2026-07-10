// https://leetcode.com/problems/sliding-window-maximum/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // define deque and result array 
    let deque = [];
    let result = [];

    // one iteration on complete array
    for(let i =0; i<nums.length; i++){
        // if the max value present in deque is out of window the shift
        if(deque.length > 0 && deque[0] <= i-k){
            deque.shift();
        }

        // while all the values before biggest value is small remove all of the them
        while(deque.length > 0 && nums[deque[deque.length-1]] <= nums[i]){
            deque.pop();
        }

        // add the current index deque will be always in decreasing order
        deque.push(i);

        // push all the deques starting index value after the first window ends of size k
        if(i >= k-1){
            result.push(nums[deque[0]])
        }
    }
    return result;
};