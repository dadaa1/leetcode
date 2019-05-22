/*
 * @lc app=leetcode.cn id=961 lang=javascript
 *
 * [961] 重复 N 次的元素
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
  const map = {};
  for (let i = 0; i < A.length; i++) {
    if (map[A[i]]) {
      //   map[A[i]]++;
      //   if (map[A[i]] === A.length / 2) {
      return A[i];
      // }
    } else {
      map[A[i]] = 1;
    }
  }
};
