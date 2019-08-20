/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const result = [];
  nums.forEach(item => {
    const other = nums.filter(el => el !== item);
    if (other.length <= 1) {
      result.push([item, ...other]);
    } else {
      permute(other).forEach(el => {
        result.push([item, ...el]);
      });
    }
  });
  return result;
};
