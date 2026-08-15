// https://leetcode.com/problems/binary-tree-level-order-traversal/

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
 * @return {number[][]}
 */

// Iterative approach 

var levelOrder = function(root) {
    // cover edge case 
    if (!root) return [];
    // Define imp tracking variables 
    let ans = [];
    // Use queue for BFS means level order traversal initiate with root
    let q = [root];
    while(q.length){
        let levelArr = [];
        let ql = q.length;
        for(let i = 0; i<ql; i++){
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val);
        }
        ans.push(levelArr);
    }
    return ans;
};


// Recurssive approach 

var levelOrder2 = function(root) {
    if (!root) return [];
    let ans = [];
    let traversal = (curr, level)=>{
       if(!ans[level]) ans[level] = [];
       ans[level].push(curr.val);
       curr.left && traversal(curr.left, level+1);
       curr.right && traversal(curr.right, level+1);
    }
    traversal(root, 0);
    return ans;
};