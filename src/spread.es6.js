// rest
function foo(first, ...args) {
	console.log(first, args)
}

let args = [1,2,3]
// foo.apply(null, args)
// spread
foo(...args)
// foo(1, 2, 3)
foo({}, ...args, true)
// foo({}, 1, 2, 3, true)
