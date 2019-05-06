/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums[0] > target) {
    nums.unshift(target);
    return 0;
  }
  for (let i = 0; i < nums.length; i++) {
    if (target === nums[i]) {
      nums.splice(i, 0, target);
      return i;
    }
    if (i !== 0 && target < nums[i] && target > nums[i - 1]) {
      nums.splice(i, 0, target);
      return i;
    }
  }
  nums.push(target);
  return nums.length - 1;
};
