/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
  // 这是一个脑袋急转弯 mmp
  return n % 4 !== 0;
};
// @lc code=end
