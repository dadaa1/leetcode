/*
 * @lc app=leetcode.cn id=896 lang=javascript
 *
 * [896] 单调数列
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  const len = A.length;
  if (len < 3) {
    return true;
  }
  let flag = null;
  let pre = A[0];
  for (let i = 1; i < len; i++) {
    if (pre === A[i]) {
      continue;
    }
    if (typeof flag !== 'boolean') {
      flag = pre - A[i] > 0;
      pre = A[i];
      continue;
    }
    if (pre - A[i] > 0 === flag) {
      pre = A[i];
    } else {
      return false;
    }
  }
  return true;
};
