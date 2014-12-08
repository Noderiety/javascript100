var add = (a, b) => a + b
var logListening = () => console.log('listening')

console.log(add(1, 2))
server.listen(logListening)

Function.prototype.bind2 = function(that) {
  var fn = this
  var args = Array.prototype.slice.call(arguments, 1)
  return function boundFn() {
    var innerArgs = Array.prototype.slice.call(arguments)
    var returnValue = fn.apply(that, args.concat(innerArgs))
    return returnValue
  }
}