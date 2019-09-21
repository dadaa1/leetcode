/*
 * @lc app=leetcode.cn id=164 lang=javascript
 *
 * [164] 最大间距
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
  if (nums.length < 2) {
    return 0;
  }
  nums.sort((a, b) => a - b);
  let diff = 0;
  let val = null;
  nums.reduce((pre, item) => {
    val = pre - item;
    if (val < 0) {
      val = -val;
    }
    if (val > diff) {
      diff = val;
    }
    return item;
  }, nums[0]);
  return diff;
};
