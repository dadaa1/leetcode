/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const arr = [];
  if (numRows === 0) {
    return arr;
  }
  arr.push([1]);
  if (numRows === 1) {
    return arr;
  }
  for (let i = 1; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(arr[i - 1][j] + arr[i - 1][j - 1]);
      }
    }
    arr.push(row);
  }
  return arr;
};
