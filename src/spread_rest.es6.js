Function.prototype.bound = function (context, ...args) {
	return (...innerArgs) => this.apply(context, args.concat(innerArgs))
}

function simple() {
	console.log(this, arguments)
}

let one = [1,2,3]
let two = [4,5,6]
simple.bound({}, ...one)(...two)
simple.bound({}, 1,2,3)(4,5,6)