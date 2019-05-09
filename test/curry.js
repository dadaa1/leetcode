function currying(fn) {
  const list = [];
  return function next(...arg) {
    if (arg.length === 0) {
      return fn.apply(null, list);
    }
    list.push(...arg);
    return next;
  };
}

const add = currying((...arg) => arg.reduce((pre, item) => pre + item, 0));

const a = add(1, 2)(3)();

console.log(a);
