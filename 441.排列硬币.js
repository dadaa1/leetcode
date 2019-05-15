/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  if (n === 1) {
    return 1;
  }
  const func = l => (l * (l + 1)) / 2;
  let max = n;
  let min = 0;
  let num = parseInt(n / 2);
  while (1) {
    if (func(num) === n) {
      return num;
    }
    if (max - 1 === min) {
      return min;
    }
    if (func(num) > n) {
      max = num;
      num = parseInt((max + min) / 2);
    } else {
      min = num;
      num = parseInt((max + min) / 2);
    }
  }
};
