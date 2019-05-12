/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 1) {
    return 1;
  }
  let num = parseInt(x / 2);
  let max = x;
  let min = 0;
  while (1) {
    if (num * num === x) {
      return num;
    }
    if (max === min + 1) {
      return min;
    }
    if (num * num > x) {
      //值取得大了
      max = num;
      num = parseInt((max + min) / 2);
    }
    if (num * num < x) {
      min = num;
      num = parseInt((max + min) / 2);
    }
  }
};
