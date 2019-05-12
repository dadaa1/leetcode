/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */
/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
  const map = {};
  function dp(n) {
    if (map[n]) {
      return map[n];
    }
    // let num = 1;
    if (n === 1 || n === 0) {
      return 1;
    } else if (n === 2) {
      return 2;
    } else {
      map[n - 1] = dp(n - 1);
      map[n - 2] = dp(n - 2);
      return map[n - 1] + map[n - 2];
    }
  }
  return dp(n);
};
