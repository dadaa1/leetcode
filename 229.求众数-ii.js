/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const n = nums.length / 3;
  const map = {}
  nums.forEach(el => {
    if (map[el]) {
      map[el] += 1
    } else {
      map[el] = 1
    }
  })
  const result = []
  Object.keys(map).forEach(el => {
    if (map[el] > n) {
      result.push(el)
    }
  })
  return result;
};
// @lc code=end

