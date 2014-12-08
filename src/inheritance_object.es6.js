let log = console.log
function A(x) {
  this.x = x
}

let APrototype = {
  methodA() {
    log(this.x)
  }
}

function B(x, y) {
  A.call(this, x)
  this.y = y
}

let BPrototype = {
  methodB() {
    log(this.y)
  }
}

let a = Object.create(APrototype)
A.call(a, 1)
a.methodA()


let b = Object.create(BPrototype)
B.call(b, 1, 2)
b.methodB()