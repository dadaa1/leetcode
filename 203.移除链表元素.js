/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  //链表还是不太会
  let obj = head;

  let arr = [];
  while (obj) {
    arr.push(obj.val);
    obj = obj.next;
  }
  arr = arr.filter(item => item !== val);
  return arr.reduceRight((pre, item) => {
    return {
      val: item,
      next: pre
    };
  }, null);
};
removeElements = function(head, val) {
  let obj = head;
  while (obj) {
    if (obj.val === val) {
      if (obj.next) {
        obj.next = obj.next.next;
        obj = obj.next;
      } else {
        obj = null;
      }
    } else {
      obj = obj.next;
    }
  }
  return head;
};
