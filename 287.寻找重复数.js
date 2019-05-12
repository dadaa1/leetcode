/*
 * @lc app=leetcode.cn id=287 lang=javascript
 *
 * [287] 寻找重复数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  let n = null;
  for (let i = 0; i < nums.length; i++) {
    n = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      // console.log(j);
      if (n === nums[j]) {
        return n;
      }
    }
  }
};
