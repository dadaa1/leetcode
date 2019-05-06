/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */
/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  const arr = `${x}`.split('');
  arr.reverse();
  let flag = false;
  let sign = '';
  const list = arr.map((item) => {
    if (item === '0' && !flag) {
      return '';
    }
    if (item === '-') {
      sign = '-';
      return '';
    }
    flag = true;
    return item;
  });
  const value = Number(sign + list.join(''));
  if (value > Math.pow(2, 31) - 1 || value < -Math.pow(2, 31)) {
    return 0;
  }
  return value;
};
