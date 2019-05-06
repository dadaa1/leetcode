/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  nums.sort();
  for (let i = 0; i < nums.length; i++) {
    if (
      i !== 0 &&
      i !== nums.length &&
      nums[i] !== nums[i - 1] &&
      nums[i] !== nums[i + 1]
    ) {
      return nums[i];
    }
  }
  return nums[0];
};
