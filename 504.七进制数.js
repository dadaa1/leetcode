/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
  const strArr = [];
  if (num === 0) {
    return '0';
  }
  let l = null;
  while (num) {
    l = num % 7;
    strArr.unshift(l);
    num = (num - l) / 7;
  }
  return strArr
    .map((item, index) => {
      if (index !== 0) {
        return item < 0 ? -1 * item : item;
      }
      return item;
    })
    .join('');
};
