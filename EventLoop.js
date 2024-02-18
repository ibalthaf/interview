// function bark() {
// 	console.log('bark');
// }

// function meow() {
// 	console.log('meow');
// }

// function speak() {
// 	console.log('Speaking');
// 	bark();
// 	meow();
// 	console.log('Done speaking');
// }

// speak();

// ###########################################

// function logWorld() {
// 	console.log('world');
// }

// function main() {
// 	console.log('hello');
// 	setTimeout(logWorld, 1000);
// 	setTimeout(() => console.log('timeout 0'), 0);
// 	console.log('goodbye');
// }
// main();

// ###########################################

// function main() {
// 	console.log('first');
// 	setTimeout(() => console.log('second'), 1000);
// 	setTimeout(() => console.log('third'), 0);
// 	console.log('fourth');
// }
// main();

// ###########################################

function logOne() {
	console.log('1');
}

function main() {
	setTimeout(logOne, 0);
	Promise.resolve(2)
		.then((val) => val * 2)
		.then(console.log);
	console.log('3');
}
main();
