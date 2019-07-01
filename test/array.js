function a() {
  const arr = [];
  const len = 5;
  function random() {
    return Math.floor(Math.random() * 30) + 2;
  }
  function b(arr) {
    if (arr.length === len) {
      return arr;
    }
    let num = random();
    if (!arr.includes(num)) {
      arr.push(num);
    }
    return b(arr);
  }
  return b(arr);
}

console.log(a());

// testhelloworld
// test1
// json
