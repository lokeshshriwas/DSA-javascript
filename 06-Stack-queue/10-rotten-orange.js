// https://leetcode.com/problems/rotting-oranges/

// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

// Example 1:

// Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
// Output: 4
// Example 2:

// Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
// Output: -1
// Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
// Example 3:

// Input: grid = [[0,2]]
// Output: 0
// Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 10
// grid[i][j] is 0, 1, or 2.

/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let queue = [];
  let n = grid.length;
  let m = grid[0].length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  let maxlvl = 0;
  while (queue.length) {
    let [x, y, lvl] = queue.shift();
    if (y > 0 && grid[x][y - 1] == 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, lvl + 1]);
    }
    if (n - 1 > x && grid[x + 1][y] == 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, lvl + 1]);
    }
    if (m - 1 > y && grid[x][y + 1] == 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, lvl + 1]);
    }
    if (x > 0 && grid[x - 1][y] == 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, lvl + 1]);
    }
    maxlvl = Math.max(maxlvl, lvl);
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] == 1) {
        return -1;
      }
    }
  }

  return maxlvl;
};
