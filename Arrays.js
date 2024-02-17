// const arr1 = [1, 2, 3];
// const arr2 = new Array(1, 2, 3);
// const arr3 = new Array(4);

// console.log(arr1, arr2, arr3);
// output: [ 1, 2, 3 ] [ 1, 2, 3 ] [ <4 empty items> ]

// #####################################################################
// const arr1 = [1, 2, 3];
// arr1.length = 1;
// console.log(arr1);
// arr1.length = 3;
// console.log(arr1);
// output: [ 1 ] [ 1, <2 empty items> ]

// #####################################################################

// const arr = [1, 2, 3];

// const sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(sum);

// ####################################################################
// const arr = [1, 2, 3];

// const sum = arr.reduce((acc, val) => acc + val);
// console.log(sum);

// skips the first itration and assign first value as accumulator

// ####################################################################

// map, every, some

// ####################################################################

// const arr = [1, 2, 3];

// const diff1 = arr.reduceRight((acc, val) => acc - val, 0);
// const diff2 = arr.reduceRight((acc, val) => acc - val);
// console.log(diff1, diff2);

// skips the first itration and assign first value as accumulator
// Output: -6 0

// #####################################################################

// const arr = [5, 7, 3, 0];

// arr.sort((first, second) => {
// 	if (first === 3) return -1;
// 	if (second === 3) return 1;
// 	return first - second;
// });
// console.log(arr);
// output: [ 3, 0, 5, 7 ]; 3 will be always at the begining
