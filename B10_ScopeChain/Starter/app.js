function b() {
	console.log(myVar); //returns 1, value from global level - the outer reference
}

function a() {
	var myVar = 2;
	b();
}

var myVar = 1; //returns 1
a();

/**
 * Even though function b is called inside function a, function b is still connected at the global level, which is why it returns 1. Function b's execution context doesn't haveee a myVar, so we go up the scope chain to the outer reference, which in this case, is the global execution context.
 * The following code switch things up lexically, which changes what is returned:
 * 

	function a() {
		function b() {
		console.log(myVar); //returns 2, value from function a's execution context
	}
		var myVar = 2;
		b();
	}

	var myVar = 1; //returns 1
	a();
 */