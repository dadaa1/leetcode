/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
  let num = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        num += 4;
        if (i - 1 >= 0 && grid[i - 1][j] === 1) {
          num--;
        }
        if (i + 1 < grid.length && grid[i + 1][j] === 1) {
          num--;
        }
        if (j - 1 >= 0 && grid[i][j - 1] === 1) {
          num--;
        }
        if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
          num--;
        }
      }
    }
  }
  return num;
};
