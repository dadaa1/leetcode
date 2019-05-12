/**
 *  斐波那契数列
 */

function recurFib1(n) {
  if (n < 2) {
    return n;
  } else {
    return recurFib1(n - 1) + recurFib1(n - 2);
  }
}
const map = {};
function recurFib2(n) {
  if (map[n]) {
    return map[n];
  }
  if (n < 2) {
    return n;
  } else {
    const res = recurFib2(n - 1) + recurFib2(n - 2);
    map[n] = res;
    return res;
  }
}

const start1 = new Date();
const a1 = recurFib1(50);
console.log((new Date() - start1) / 1000);
console.log(a1);
console.log('----------------');
const start2 = new Date();
const a2 = recurFib2(50);
console.log((new Date() - start2) / 1000);
console.log(a2);
