/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// var merge = function(nums1, m, nums2, n) {
//   let l = 0;
//   let r = 0;
//   while (l < m && r < n) {
//     if (nums1[l] > nums2[r]) {
//       nums1.push(nums2[r]);
//       r += 1;
//     } else {
//       nums1.push(nums1[l]);
//       l += 1;
//     }
//   }
//   while (l < m) {
//     nums1.push(nums1[l]);
//     l++;
//   }
//   while (r < n) {
//     nums1.push(nums2[r]);
//     r++;
//   }
//   nums1.splice(0, m + n);
// };

function merge(nums1, m, nums2, n) {
  let mm = m;
  let nn = n;
  const list = [];
  while (nn || mm) {
    if (nn === 0) {
      list.unshift(nums1[mm - 1]);
      mm -= 1;
      continue;
    }
    if (mm === 0) {
      list.unshift(nums2[nn - 1]);
      nn -= 1;
      continue;
    }
    if (nums1[mm - 1] >= nums2[nn - 1]) {
      list.unshift(nums1[mm - 1]);
      mm -= 1;
    } else {
      list.unshift(nums2[nn - 1]);
      nn -= 1;
    }
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = list[i]
  }
}
