// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.

// Example 1

// Input: head = [1,2,2,1]
// Output: true
// Example 2:

// Input: head = [1,2]
// Output: false

// Constraints:

// The number of nodes in the list is in the range [1, 105].
// 0 <= Node.val <= 9

// Follow up: Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */


/////////////////////////////// Approach with O(n) time complexity and O(n) space complexity \\\\\\\\\\\\\\\\\\\\\\\\\\\\
function findInArr(arr){
    let n = arr.length - 1;
    let mid = Math.floor(arr.length/2)
    for(let i = 0; i< mid; i++){
        if(arr[i] != arr[n-i]){
            return false;
        }
    }
    return true;
 }


var isPalindrome = function(head) {
    let newArr = [];
    let curr = head;
    while(curr){
        newArr.push(curr.val);
        curr = curr.next;
    }
    return findInArr(newArr);
};


/**
 * @param {ListNode} head
 * @return {boolean}
 */

///////////////////// Approach with O(n) time complexity and O(1) space complexity \\\\\\\\\\\\\\\\\\\\\\\\
var isPalindrome = function (head) {
  // finding the mid
  let slow = (fast = head);
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reversing from mid to end
  let prev = null;
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // comparing both till second list become null
  let firstList = head;
  let secondList = prev;

  while (secondList) {
    if (firstList.val != secondList.val) {
      return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true;
};
