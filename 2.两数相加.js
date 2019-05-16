/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// const addTwoNumbers = function(l1, l2) {
//   function getArr(obj) {
//     let newObj = obj;
//     const arr = [];
//     while (newObj) {
//       arr.push(newObj.val);
//       newObj = newObj.next;
//     }
//     return arr;
//   }
//   const val1 = Number(
//     getArr(l1)
//       .reverse()
//       .join('')
//   );
//   const val2 = Number(
//     getArr(l2)
//       .reverse()
//       .join('')
//   );
//   const arr = `${(val1 + val2).toPrecision(100).split('.')[0]}`
//     .split('')
//     .reverse();
//   return arr.reduceRight(
//     (pre, item) => ({
//       val: Number(item),
//       next: pre
//     }),
//     null
//   );
// };

const addTwoNumbers = function(l1, l2) {
  const res = {};
  let useR = res;
  let pre = {};
  let y = 0;
  let obj1 = l1;
  let obj2 = l2;
  while (obj1 || obj2) {
    const value = (obj1 || { val: 0 }).val + (obj2 || { val: 0 }).val + y;
    useR.val = value % 10;
    useR.next = {};
    pre = useR;
    useR = useR.next;
    y = parseInt(value / 10);
    if (obj1) {
      obj1 = obj1.next;
    }
    if (obj2) {
      obj2 = obj2.next;
    }
  }
  if (y !== 0) {
    pre.next = {
      val: y,
      next: null
    };
  } else {
    pre.next = null;
  }
  return res;
};
// 这个是别人的算法
// var addTwoNumbers = function(l1, l2) {
//   // 基础数学
//   const addNumbers = (l1, l2, extra) => {
//     let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + extra;
//     const node = new ListNode(sum % 10);
//     let nl1 = l1 ? l1.next : null;
//     let nl2 = l2 ? l2.next : null;
//     if (nl1 || nl2 || sum > 9) {
//       node.next = addNumbers(nl1, nl2, Math.floor(sum / 10));
//     }
//     return node;
//   };
//   return addNumbers(l1, l2, 0);
// };
