function foo() {
  let x = 1;
  let y = 10;

  let obj = {x, y};
  // let obj = {x: x, y: y}
  return obj
}

let obj = foo()
obj.x // 1
obj.y // 10