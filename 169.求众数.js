/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const map = {};
  let z = nums[0];
  let maxLen = 0;
  nums.forEach(item => {
    if (!map[item]) {
      map[item] = 1;
    } else {
      map[item]++;
    }
    if (maxLen < map[item]) {
      z = item;
      maxLen = map[item];
    }
  });
  return z;
};
