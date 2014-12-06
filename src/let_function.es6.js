function outer() {
	let x = true;

	function inner() {
		console.log(x);
		x = false;
		console.log(x);
	}

	return inner;
}

let inner = outer()
setTimeout(() => inner(), 2000)