let obj = {
  foo: 'bar',
  a: true,
  b: false
}

let {a, b} = obj
// let a = obj.a, b = obj.b

let [c, d] = [1, 2, 3]
// let a = obj.a, b = obj.b

console.log(a, b, c, d)
// true, false, 1, 2