
Function.prototype.bind2 = function(that, ...args) {
  return (...innerArgs) => this.apply(that, args.concat(innerArgs))
}