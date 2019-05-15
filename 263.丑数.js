/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
  // 先看能不能被2整除，再看能不能被3整除，最后看能不能被5整除
  if (num === 0) {
    return false;
  }
  let n = num;
  while (n) {
    if (n === 1) {
      return true;
    }
    if (n % 2 === 0) {
      n = parseInt(n / 2);
      continue;
    }
    if (n % 3 === 0) {
      n = parseInt(n / 3);
      continue;
    }
    if (n % 5 === 0) {
      n = parseInt(n / 5);
      continue;
    } else {
      return false;
    }
  }
  return true;
};
