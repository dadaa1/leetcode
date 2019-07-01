/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
  if (num === 1) {
    return true;
  }
  if (num < 4) {
    return false;
  }
  return isPowerOfFour(num / 4);
};
