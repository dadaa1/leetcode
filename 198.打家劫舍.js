/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // const map = {};
  // const dp = nums => {
  //   const len = nums.length;
  //   if (len === 0) {
  //     return 0;
  //   }
  //   if (len === 1) {
  //     return nums[0];
  //   }
  //   if (len === 2) {
  //     return Math.max(nums[0], nums[1]);
  //   }
  //   if (typeof map[nums] === 'number') {
  //     return map[nums];
  //   }
  //   const a = dp(nums.slice(2)) + nums[0];
  //   const b = dp(nums.slice(1));
  //   const res = Math.max(a, b);
  //   map[nums] = res;
  //   return res;
  // };
  // return dp(nums);
  const resList = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      resList.push(nums[0]);
    } else if (i === 1) {
      resList.push(Math.max(nums[0], nums[1]));
    } else {
      resList.push(Math.max(nums[i] + resList[i - 2], resList[i - 1]));
    }
  }
  return resList.pop() || 0;
};
