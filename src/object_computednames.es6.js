let x = 'foo'
let obj = {}
obj[x] = true

let obj2 = {
  [x]: 'hello'
}

console.log(obj, obj2)

function newObj(key, value) {
  return {
    [key]: value
  }
}

newObj('foo', 'bar')