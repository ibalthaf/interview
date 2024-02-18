// function* genNumbers(count) {
// 	for (let i = 0; i < count; i++) {
// 		yield i;
// 	}
// 	return 5;
// }

// const generator = genNumbers(3);

// for (value of generator) {
// 	console.log(value);
// }

// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// #################################################
// function* genNumbers() {
// 	const value = yield 0;
// 	yield value + 3;
// }

// const generator = genNumbers(3);

// console.log(generator.next());
// console.log(generator.next(5));
// output:
//{ value: 0, done: false }
// { value: 8, done: false }
// ###################################################

function* generator1() {
	yield 1;
	yield 2;
}

function* generator2() {
	yield 3;
	yield 4;
}

function* genNumbers() {
	yield* generator1();
	yield 2.5;
	yield* generator2();
}

const generator = genNumbers(3);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
