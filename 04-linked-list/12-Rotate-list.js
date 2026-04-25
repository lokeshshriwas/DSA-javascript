// https://leetcode.com/problems/rotate-list/description/

// Given the head of a linked list, rotate the list to the right by k places.

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]
// Example 2:

// Input: head = [0,1,2], k = 4
// Output: [2,0,1]

// Constraints:

// The number of nodes in the list is in the range [0, 500].
// -100 <= Node.val <= 100
// 0 <= k <= 2 * 109

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  // count the length of the linked list
  let length = 0;
  let curr = head;
  while (curr) {
    curr = curr.next;
    length++;
  }

  // initiate fast and slow pointer
  let fast = head;
  let slow = head;
  let floopLength = k % length;

  for (let i = 0; i < floopLength; i++) {
    fast = fast.next;
  }

  // run while loop till fast pointer is not null

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  // associate fast.length to head and save the reference of slow.next because now its a new head

  fast.next = head;
  let newHead = slow.next;
  slow.next = null;

  return newHead;
};
