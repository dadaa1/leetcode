/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  if (num < 10) {
    return num;
  }
  const list = num.toString().split('');
  return addDigits(
    list.reduce((pre, item) => {
      return Number(pre) + Number(item);
    })
  );
};
