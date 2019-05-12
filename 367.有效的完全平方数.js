/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true;
  }
  let n = parseInt(num / 2);
  let m = num; //最大值
  let i = 0; //最小值
  while (1) {
    if (n * n === num) {
      return true;
    }
    if (n === 0 || m === i + 1) {
      return false;
    }
    if (n * n > num) {
      // 说明这个值大了
      m = n;
      n = parseInt((i + m) / 2);
    } else {
      i = n;
      n = parseInt((i + m) / 2);
    }
  }
};
