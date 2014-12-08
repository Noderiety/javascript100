let log = console.log
function A (x) {
  this.x = x
}

function methodA() {
  log(this.x)
}
A.prototype.methodA = methodA

function B(x, y) {
  A.call(this, x)
  this.y = y
}
B.prototype = Object.create(A.prototype, {
  constructor: {
    value: B,
    enumerable: false
  }
})

function methodB() {
  log(this.y)
}
B.prototype.methodB = methodB

let a = new A(1)
a.methodA()
let b = new B(1, 2)
b.methodB()