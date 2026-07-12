// https://leetcode.com/problems/binary-tree-preorder-traversal/

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
var preorderTraversal = function (root) {
    let ans = [];
    function traversal(curr) {
        // preorder-traversal = root -> left -> right
        // until the root current node becomes the leaf node which will be called by null
        if (!curr) return
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right);
    }
    traversal(root)
    return ans;
};