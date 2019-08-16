/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  // console.log(typeof n, n);
  const list = [];
  while (n) {
    let l = n % 2;
    n = parseInt(n / 2, 10);
    list.unshift(l);
  }
  let diff = 32 - list.length;
  while (diff) {
    list.unshift(0);
    diff -= 1;
  }
  list.reverse();
  let resulet = 0;
  let tax = 1;
  while (list.length) {
    resulet += list.pop() * tax;
    tax = tax * 2;
  }
  return resulet;
};
