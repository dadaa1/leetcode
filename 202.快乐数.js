/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n === 1 || n === 7) {
    return true;
  }
  if (n < 10) {
    return false;
  }
  let arr = n.toString().split('');
  console.log(arr);
  const value = arr.reduce((pre, item) => {
    return pre + item * item;
  }, 0);
  return isHappy(value);
};
