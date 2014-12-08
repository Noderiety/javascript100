console.log(1)
try {
	try {
		console.log(2)
		throw new TypeError('fail')
		console.log('2b')
	} catch(e) {
		if (e instanceof TypeError) throw 'TypeError was thrown'
		console.log(3)
		console.log(e.stack)
		throw e
	} finally {
		console.log(4)
	}
} catch(e) {
	console.log('outer: ', e)
}