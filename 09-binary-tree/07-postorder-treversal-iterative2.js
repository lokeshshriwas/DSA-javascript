// https://leetcode.com/problems/binary-tree-postorder-traversal/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    let stack = [];
    let curr = root;
    let ans = [];
    let lastVisited = null;

    while(curr || stack.length){
        // Push all values to stack untile i reach the left most element
        while(curr){
            stack.push(curr);
            curr = curr.left;
        }
        // peek the bottom most element and check for left side if have any
        let peekNode = stack[stack.length-1];
        // if right exist and its not the lastvisited value then make curr as peek nodes right
        if(peekNode.right && peekNode.right != lastVisited){ 
            curr = peekNode.right
        } else {
            ans.push(peekNode.val);
            // Already covered value must be popped and mark as lastvisited to avoid duplication and infinity loop condition
            lastVisited = stack.pop();
        }
    }
    return ans;
};