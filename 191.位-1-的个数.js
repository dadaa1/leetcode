/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
  let r = n;
  let num = 0;
  //十进制转二进制
  while (r) {
    if (r % 2 === 1) {
      num++;
    }
    r = parseInt(r / 2);
  }
  return num;
};
