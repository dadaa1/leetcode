/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const map = {};
  const dp = nums => {
    const len = nums.length;
    if (len === 0) {
      return 0;
    }
    if (len === 1) {
      return nums[0];
    }
    if (len === 2) {
      return Math.max(nums[0], nums[1]);
    }
    if (typeof map[nums] === 'number') {
      return map[nums];
    }
    const a = dp(nums.slice(2)) + nums[0];
    const b = dp(nums.slice(1));
    const res = Math.max(a, b);
    map[nums] = res;
    return res;
  };
  return dp(nums);
};
