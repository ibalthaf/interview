// var will be hoisted so output will be undefined

// let will cause an error

// console.log('varnum', varnum);
// console.log('letnum', letnum);

// #############################################################
// var varnum = 0;
// let letnum = 0;

// This works as expected
// function test() {
// 	var varnum = 0;
// 	let letnum = 0;
// 	console.log('varnum', varnum);
// 	console.log('letnum', letnum);
// }

// test();

//###############################################################

// This letnum is only block scope will throw err, varnum is available in whole test1 function.

// function test1() {
// 	if (true) {
// 		var varnum = 0;
// 		let letnum = 0;
// 	}
// 	console.log('varnum', varnum);
// 	console.log('letnum', letnum);
// }
// test1();

//##############################################################

// const is same as let except its a contant cannot be reassigned. but can be mutate then

// function test1() {
// 	const constnum = 0;
// 	let letnum = 0;
// const arr = [1,2,3];
// arr.push(4); // mutating

// 	constnum = 2;

// 	console.log('constnum', constnum);
// 	console.log('letnum', letnum);
// }
// test1();

//##############################################################
