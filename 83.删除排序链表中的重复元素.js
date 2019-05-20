/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
var deleteDuplicates = function(head) {
  let obj = head;
  let pre = null;
  while (obj) {
    if (pre !== null && pre.val === obj.val) {
      pre.next = obj.next; //删除相同的链表数据
    } else {
      pre = obj;
    }
    obj = obj.next;
  }
  return head;
};
