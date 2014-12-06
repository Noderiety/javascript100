// fn.bind(that, 1, 2, 3)(4, 5, 6)
// that.fn(1, 2, 3, 4, 5, 6)
Function.prototype.bind2 = function(that) {
  var fn = this
  var args = Array.prototype.slice.call(arguments, 1)
  return function() {
    var innerArgs = Array.prototype.slice.call(arguments)
    return fn.apply(that, args.concat(innerArgs))
  }
}

function fn() {
  console.log(this, arguments)
}

var that = {}

console.log(fn.bind2(that, 1, 2, 3)(4, 5, 6))