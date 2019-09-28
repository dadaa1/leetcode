/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0) {
    return 0;
  }
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 1; i < N; i++) {
    c = b;
    b = a + b;
    a = c;
  }
  return b;
};
