/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let flag = true;
  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] > nums2[0]) {
      flag = false;
      nums1.splice(i, 0, ...nums2);
      break;
    }
  }
  if (flag) {
    nums1.push(...nums2);
  }
  console.log(nums1);
  const len1 = nums1.length;
  if (len1 === 0) {
    return 0;
  }
  if (len1 % 2) {
    // 奇数
    return nums1[(len1 - 1) / 2];
  } else {
    return (nums1[(len1 - 2) / 2] + nums1[len1 / 2]) / 2;
  }
};
