/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // if (!head || !head.next) {
  //   return head;
  // }
  // const obj = reverseList(head.next);
  // head.next.next = head;
  // head = null;
  // return obj;
  let obj = null;
  while (head) {
    const { next } = head;
    head.next = obj;
    obj = head;
    head = next;
  }
  return obj;
};
