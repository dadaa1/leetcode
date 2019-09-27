/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const arr = [];
  lists.forEach(item => {
    while (item) {
      arr.push(item.val);
      item = item.next;
    }
  });
  if (arr.length === 0) {
    return null;
  }
  arr.sort((a, b) => a - b);
  const obj = {};
  let preHead = null;
  arr.reduce((pre, item) => {
    pre.val = item;
    pre.next = {};
    preHead = pre;
    return pre.next;
  }, obj);
  if (preHead) {
    preHead.next = null;
  }
  return obj;
};
