/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let max = 0;
  let list = [];
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) {
      map[nums[i]] = 1;
    }
    map[nums[i]]++;
    if (map[nums[i]] === max) {
      list.push(nums[i]);
    }
    if (map[nums[i]] > max) {
      max = map[nums[i]];
      list = [nums[i]];
    }
  }
  console.log(list);

  function a(nums, item) {
    while (1) {
      if (nums[0] !== item) {
        nums.shift();
      }
      if (nums[nums.length - 1] !== item) {
        nums.pop();
      }
      if (nums[0] === item && nums[nums.length - 1] === item) {
        return nums.length;
      }
    }
  }
  // console.log(list);
  // console.log();
  // const l = list.map(i => a([...nums], i));
  // console.log(l, Math.min(l));
  return Math.min(...list.map(i => a([...nums], i)));
};
