let data = true

function foo(that, data) {
	// do something...
}

let lambda = dataParam =>	foo(this, dataParam)
lambda(data)

let that = this
function fn(dataParam) {
	return foo(that, dataParam)
}
fn(data)

