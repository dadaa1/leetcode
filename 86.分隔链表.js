/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let max = null;
  let maxNext = null;
  let min = null;
  while (head) {
    const next = head.next;
    head.next = null;
    if (head.val >= x) {
      console.log(max);
      if (max) {

        if (!maxNext) {
          max.next = head;
        }
        maxNext = head;
      } else {
        max = head;
      }
    } else {
      if (min) {
        min.next = head;
      } else {
        min = head;
      }
    }
    head = next;
  }
  // console.log(max, min);
  const X = new ListNode(x);
  if (max) {
    max.next = X;
  } else {
    max = X;
  }
  X.next = min;
  return max;
};
// @lc code=end

