/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n === 1) {
    return true;
  } else if (n < 3) {
    return false;
  }
  return isPowerOfThree(n / 3);
};

isPowerOfThree = function(n) {
  let num = n;
  while (1) {
    if (num === 1) {
      return true;
    } else if (num < 3) {
      return false;
    }
    num = num / 3;
  }
};
