Function.prototype.bind2 = function bind2(that, ...args) {
	return (...innerArgs) => this.apply(that, args.concat(innerArgs))
}

function foo() {
	console.log(this, arguments)
}

foo.bind2({hell: 'world'}, 1,2,3)(4,5,6)