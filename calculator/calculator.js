function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	return array.reduce((total, item) => {
		return total+= item;
	}, 0)
}

function multiply (array) {
	return array.reduce((total, item) => {
		return total * item;
	}, 1)
}

function power(a, b) {
	return a ** b;
}

function factorial(a) {
	if(a == 0) {
		return 1;
	}
	let sum = 1;
	for(let i = 1; i <= a; i++) {
		sum = sum * i;
	}
	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}