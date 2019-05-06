/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
const mergeTwoLists = function (l1, l2) {
  function getArr(obj) {
    let newObj = obj;
    const arr = [];
    while (newObj) {
      arr.push(newObj.val);
      newObj = newObj.next;
    }
    return arr;
  }
  const arr1 = getArr(l1);
  const arr2 = getArr(l2);
  const arr = [];
  let flag = true;
  while (flag) {
    if (arr1.length) {
      arr.push(arr1.shift());
    }
    if (arr2.length) {
      arr.push(arr2.shift());
    }
    if (!arr2.length && !arr1.length) {
      flag = false;
    }
  }
  return arr
    .sort((a, b) => a - b)
    .reduceRight(
      (pre, item) => ({
        val: item,
        next: pre,
      }),
      null,
    );
};
