// const obj = {};
// console.log(obj === {});
// console.log(obj === obj);

// #######################################################
// const id1 = Symbol('id');
// const id2 = Symbol('id');
// const id3 = Symbol.for('id3');
// const id4 = Symbol.for('id3');

// console.log(id3 === id4);
// console.log(id1 === id2);

// const obj = {
// 	id: 'Hello',
// 	[id1]: 123,
// 	[id2]: 45667,
// };
// console.log(obj);

// ######################################################

// const obj = {
// 	name: 'Althaf',
// };

// console.log('name' in obj);
// console.log(obj.hasOwnProperty('name'));
// console.log(obj.hasOwnProperty('toString'));
// console.log('toString' in obj);

// #####################################################
// inheritance
// const obj1 = {
// 	name: 'Althaf',
// 	ph: '2344',
// };

// const obj2 = {
// 	__proto__: obj1,
// 	foo: 'bar',
// };
// console.log(obj1);
// console.log(obj2);
// console.log(obj2.name);
// console.log(obj2.foo);

// #####################################################

// const obj1 = {
// 	name: 'Althaf',
// 	ph: '2344',
// };

// const obj2 = {
// 	__proto__: obj1,
// 	foo: 'bar',
// 	[Symbol('id')]: 0,
// };

// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj2));

// for (key in obj2) {
// 	console.log(key);
// }

// ###################################################################

// const obj1 = {
// 	name: 'Althaf',
// 	ph: '2344',
// };

// const obj = {
// 	__proto__: obj1,
// 	foo: 'bar',
// 	[Symbol('id')]: 0,
// };

// const myObj = {
// 	original: 234,
// };

// Object.assign(myObj, obj);
// console.log(myObj);
// myObj.foo = 'aaa';
// console.log(myObj, obj);

// #################################################################
