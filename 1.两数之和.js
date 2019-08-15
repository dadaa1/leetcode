/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    for (j = i + 1; j < len; j++) {
      if (target === nums[i] + nums[j]) {
        return [i, j];
      }
    }
  }
};
