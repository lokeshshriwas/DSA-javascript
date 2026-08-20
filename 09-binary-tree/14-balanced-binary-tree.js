// https://leetcode.com/problems/balanced-binary-tree/

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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let ans = true;
    let calcHeight = (curr)=>{
        if(!curr) return 0;
        
        let leftDepth = calcHeight(curr.left);
        let rightDepth = calcHeight(curr.right);
        
        // As per the question, the height difference should not be more than 1.
        if(Math.abs(leftDepth-rightDepth) > 1){
            ans = false
        }

        // Return the height of the current subtree.
        // We take the maximum because the subtree height is determined by its
        // longest path (either left or right), not by the difference between them.
        // +1 counts the current node itself.
        return 1 + Math.max(leftDepth, rightDepth)
    }
    calcHeight(root);
    return ans;
};