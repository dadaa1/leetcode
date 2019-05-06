/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  let num = n;
  while (1) {
    if (num === 0) {
      return false;
    }
    if (num === 1) {
      return true;
    }
    num = num / 2;
  }
};
