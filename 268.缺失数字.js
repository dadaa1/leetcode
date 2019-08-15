/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const len = nums.length;
  const total = (len * (len + 1)) / 2;
  return nums.reduce((pre, item) => {
    pre -= item;
    return pre;
  }, total);
};
