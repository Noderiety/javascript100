function foo(...args) {
	console.log(this, args)
}

let args = [1,2,3]
// foo.apply(null, args)
foo(0, ...args)
