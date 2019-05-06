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
const addTwoNumbers = function (l1, l2) {
  function getArr(obj) {
    let newObj = obj;
    const arr = [];
    while (newObj) {
      arr.push(newObj.val);
      newObj = newObj.next;
    }
    return arr;
  }
  const val1 = Number(
    getArr(l1)
      .reverse()
      .join(''),
  );
  const val2 = Number(
    getArr(l2)
      .reverse()
      .join(''),
  );
  // console.log(typeof val1, val1 + val2);
  const arr = `${(val1 + val2).toPrecision(100).split('.')[0]}`.split('').reverse();
  return arr.reduceRight(
    (pre, item) => ({
      val: Number(item),
      next: pre,
    }),
    null,
  );
};

// const l1 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1].reduceRight(
//   (pre, item) => ({
//     val: Number(item),
//     next: pre,
//   }),
//   null,
// );
// const l2 = [5, 6, 4].reduceRight(
//   (pre, item) => ({
//     val: Number(item),
//     next: pre,
//   }),
//   null,
// );
// const a = addTwoNumbers(l1, l2);
// console.log(a);
