let log = console.log
class A {
  constructor(x) {
    this.x = x
  }

  methodA() {
    log(this.x)
  }
}

class B extends A {
  constructor(x, y) {
    super(x)
    this.y = y
  }

  methodB() {
    log(this.y)
  }
}

let a = new A(1)
a.methodA()

let b = new B(1, 2)
b.methodB()