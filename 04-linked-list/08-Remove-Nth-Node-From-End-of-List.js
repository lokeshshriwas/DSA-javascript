// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Example 1:

// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
// Example 2:

// Input: head = [1], n = 1
// Output: []
// Example 3:

// Input: head = [1,2], n = 1
// Output: [1]

// Constraints:

// The number of nodes in the list is sz.
// 1 <= sz <= 30
// 0 <= Node.val <= 100
// 1 <= n <= sz

// Follow up: Could you do this in one pass?

////////////////////////////////// Two pass method where two different loops are used \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let nodeLength = 0;
    let countingHead = head;
    let sentinal = new ListNode();
    sentinal.next = head;
    let prev = sentinal;
    while(countingHead){
        nodeLength++
        countingHead  = countingHead.next;
    }

    let realIdx = (nodeLength - n) + 1;
    let prevIdx = nodeLength-n;

    for(let i = 0; i < prevIdx; i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;

    return sentinal.next;
}

////////////////////////////////////// One pass approach using two pointers \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    //  make a sentinal node
    let sentinal = new ListNode();
    sentinal.next = head;
    let firstPointer = sentinal;

    // Move first pointer to +n
   for(let i = 0; i<n; i++){
        firstPointer = firstPointer.next;
   }

    // run a loop where first pointer.next will become null
    let secondPointer = sentinal;
    while (firstPointer.next){
        firstPointer = firstPointer.next;
        secondPointer = secondPointer.next;
    }

    // second pointer will reach the previous position of the node we want to delete 
    secondPointer.next = secondPointer.next.next;

    // return sential.next 
    return sentinal.next;
};