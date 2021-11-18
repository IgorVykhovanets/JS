// Завдання 1
//
// function minNumber(a, b, c) {
//     if (a < b && a < c) {
//         document.write(`${a}`)
//     } else if (b < a && b < c) {
//         document.write(`${b}`)
//     } else if (c < a && c < b) {
//         document.write(`${c}`)
//     }
//     return
// }

// Завдання 2

// function maxNumber(a, b, c) {
//     if (a > b && a > c) {
//         document.write(`${a}`);
//     } else if (b > a && b > c) {
//         document.write(`${b}`);
//     } else if (c > a && c > b) {
//         document.write(`${c}`)
//     }
// }
// maxNumber(10, 20, 50)

// Завдання 3
//
// function maxArray(arr) {
//     let max = arr[0]
//     for (let arrElement of arr) {
//         if (arrElement > max) {
//             max = arrElement;
//         }
//     }
//     return max;
// }
//
// console.log(maxArray(a = [1, 10, 20, 50]));


// Завдання 4

// function minArray(arr) {
//     let min = arr[0];
//     for (let arrElement of arr) {
//         if (arrElement < min) {
//             min = arrElement;
//         }
//     }
//     return min;
// }
//
// console.log(minArray(a = [10, 20, 50, 2, 100]));

// Завдання 5

// let b = 0;
// function sumArray(arr) {
//     for (let z = 0; z < arr.length; z++) {
//         b += arr[z];
//     }
//     console.log(b)
// }
//
// sumArray(a = [1, 2, 10]);

// Завдання 6

// let b = 0;
//
// function arithmetic(arr) {
//     for (let z = 0; z < arr.length; z++) {
//         b += arr[z];
//     }
//     b = b / arr.length
//     console.log(b)
// }
//
// arithmetic(a = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]);

// Завдання 7
//
// function minmanArray(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     for (a of arr) {
//         if (a > max) {
//             max = a;
//         }
//         if (a < min) {
//             min = a;
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// minmanArray(a = [10, 20, 50]);

// Завдання 8
//
// let a = 1;
//
// function randomArray(arr) {
//     for (let z = 0; z < 10; z++) {
//         arr[z] = Math.floor(Math.random(a) * 100);
//     }
//     console.log(arr)
// }
//
// randomArray(b = []);

// Завдання 9

// let a = 1;
//
// function randomArray(arr, limit, size) {
//     for (let z = 0; z < size; z++) {
//         arr[z] = Math.floor(Math.random(a) * limit);
//     }
//     console.log(arr);
// }
// randomArray(b = [],100, 10)

// Завдання 10
//
// function reverseArray(arr) {
//     for (let z = arr.length - 1; z >= 0; z--) {
//         console.log(arr[z]);
//     }
// }
//
// reverseArray(a = [1, 2, 3]);