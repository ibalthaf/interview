function sum(a, b, c) {
	return a + b + c;
}

function subtract(a, b, c) {
	return a - b - c;
}

// function curry(func) {
// 	return function (a) {
// 		return function (b) {
// 			return function (c) {
// 				return func(a, b, c);
// 			};
// 		};
// 	};
// }

function curry(func) {
	return (a) => (b) => (c) => func(a, b, c);
}

const curriedSum = curry(sum);
const curriedSub = curry(subtract);

const addFour = curriedSum(4);
console.log(addFour(10)(10));

console.log(sum(1, 4, 10));
console.log(curriedSum(1)(4)(10));
console.log(curriedSub(1)(4)(10));
