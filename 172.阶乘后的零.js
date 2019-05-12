/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
  var ans = 0;
  //count the numbers of 5 in n!
  //ex. 25, ans = (25/5) + (5/5) = 6
  for (var i = n; i > 0; i = Math.floor(i / 5)) {
    ans += Math.floor(i / 5);
  }
  return ans;
};
