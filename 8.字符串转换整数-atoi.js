/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  function countNum(num) {
    const MAX = 2 ** 31;
    if (num >= MAX) {
      return MAX - 1;
    }
    if (num <= -MAX) {
      return -MAX;
    }
    return num;
  }
  const arr = str.split('');
  let flag = 1;
  let f = false;
  let res = '';
  while (arr.length) {
    const item = arr.shift();
    if ('0' <= item && item <= '9') {
      f = true;
      res += item;
      continue;
    }
    if (f) {
      return countNum(flag * res);
    }

    if (item === ' ') {
      continue;
    }
    if (item === '-') {
      f = true;
      flag = -1;
      continue;
    }
    if (item === '+') {
      f = true;
      continue;
    }
    return countNum(flag * res);
  }
  return countNum(flag * res);
};
