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
  const arr = str.split('');
  let n = 0;
  let sign = 1;
  let flag = false;
  while (arr.length) {
    const val = arr.shift();
    if (val !== ' ') {
      continue;
    } else if (!isNaN(val)) {
      n = n * 10 + Number(val);
      flag = true;
    } else if (val === '-') {
      sign = -1;
    } else if (!flag) {
      continue;
    } else {
      break;
    }
  }
  const res = sign * n;
  if (res > Math.pow(2, 31) - 1) {
    return Math.pow(2, 31) - 1;
  }
  if (res < -Math.pow(2, 31)) {
    return -Math.pow(2, 31);
  }
  return res;
};
