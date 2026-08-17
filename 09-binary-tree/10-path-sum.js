// https://leetcode.com/problems/path-sum/|

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
 * @param {number} targetSum
 * @return {boolean}
 */

/////////////////////////// TOP DOWN Approach \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var hasPathSum = function(root, targetSum) {
    if(!root) return 0;
    let ans = false;
    function traverse(curr, currSum){
        let newSum = currSum + curr.val;
        if(!curr.left && !curr.right){
            if(targetSum === newSum){
                ans = ans || true;
            }
        }
        curr.left && traverse(curr.left, newSum);
        curr.right && traverse(curr.right, newSum);
    }
    traverse(root, 0)
    return ans;
};


/////////////////////// BOTTOM UP Approach \\\\\\\\\\\\\\\\\\\\\\\\\\\\\

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(!root) return 0;
    if(!root.left && !root.right ){
        return root.val === targetSum;
    }
    let leftHasPathSum = hasPathSum(root.left, targetSum - root.val);
    let rightHasPathSum = hasPathSum(root.right, targetSum - root.val);
    return leftHasPathSum || rightHasPathSum;    
};