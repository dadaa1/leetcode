/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  // 方法2
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
      return true;
    }
    map[nums[i]] = i;
  }
  return false;
  // // 方法1
  // const { length } = nums;
  // for (let i = 0; i < length; i++) {
  //   for (let j = 1; j <= k && i + j < length; j++) {
  //     if (nums[i] === nums[i + j]) {
  //       return true;
  //     }
  //   }
  // }
  // return false;
};
