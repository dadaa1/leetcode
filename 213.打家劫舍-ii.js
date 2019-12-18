/*
 * @lc app=leetcode.cn id=213 lang=javascript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  const dp = (arr) => {
    const reslist = [];
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        reslist.push(arr[0]);
      } else if (i === 1) {
        reslist.push(Math.max(arr[0], arr[1]));
      } else {
        reslist.push(Math.max(reslist[i - 2] + arr[i], reslist[i - 1]))
      }
    }
    // console.log('{' + arr + '}', reslist);
    return reslist.pop() || 0;
  }
  const a = dp(nums.slice(1));
  const b = dp(nums.slice(0, nums.length - 1));
  return Math.max(a, b)
};
// @lc code=end

