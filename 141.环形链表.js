/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
var hasCycle = function(head) {
  const map = {};
  while (head) {
    if (map[head.val]) {
      const flag = map[head.val].find(item => item === head);
      if (flag) {
        return true;
      }
      map[head.val].push(head);
    } else {
      map[head.val] = [head];
    }
    head = head.next;
  }
  return false;
};
