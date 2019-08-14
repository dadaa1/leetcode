/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let len = nums.length;
  let sum = nums[0],
    max = nums[0];
  for (let i = 1; i < len; i++) {
    sum = sum > 0 ? sum + nums[i] : nums[i];
    max = Math.max(sum, max);
  }
  return max;
};
// 分治法
