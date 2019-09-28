/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */
/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
  const res = [];
  let n = 0;
  while (num) {
    n += 2 ** num;
    num -= 1;
  }
  for (let i = 0; i < n; i++) {
    res.push(i);
  }
  console.log(res);
};
readBinaryWatch(10);
