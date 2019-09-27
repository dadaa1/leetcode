/*
 * @lc app=leetcode.cn id=153 lang=javascript
 *
 * [153] 寻找旋转排序数组中的最小值
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  const len = nums.length;
  for (let i = 0; i < len - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return nums[i + 1];
    }
  }
  return nums[0];
};
