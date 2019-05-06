/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const map = {};
  nums1.forEach(item => {
    map[item] = 0;
  });
  nums2.forEach(item => {
    if (map[item] === 0) {
      map[item] = 1;
    }
  });
  return Object.keys(map).filter(item => map[item]);
};
