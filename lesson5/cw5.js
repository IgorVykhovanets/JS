// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let minNumber = (a, b, c) => {
//     if (a <= b && a <= c ) {
//         console.log(a)
//     } else if (b <= a && b <= c) {
//         console.log(b)
//     } else if (c <= a && c <= b) {
//         console.log(c);
//     } else {
//         console.log('error');
//     }
// };
//
// minNumber(1, 2, 3);
// minNumber(2, 3, 1);
// minNumber(2, 2, 2);
// minNumber(2, 1, 3);
// minNumber(3,3,1)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let maxNumber = (a, b, c) => {
//     if (a <= b && a <= c && b <= c) {
//         console.log(c)
//     } else if (b <= a && b <= c && c <= a) {
//         console.log(a)
//     } else if (c <= a && c <= b && a <= b) {
//         console.log(b);
//     } else {
//         console.log('error');
//     }
// };
//
// maxNumber(1, 2, 3);
// maxNumber(1, 1, 2);
// maxNumber(2, 1, 1);
// maxNumber(1, 2, 1);
// maxNumber(1, 1, 1);

// - створити функцію яка повертає найбільше число з масиву
//
// let maxNumArr = (arr) => {
//     let max = arr[0]
//     for (let z = 0; z < arr.length; z++) {
//         if (max < arr[z]) {
//             max = arr[z];
//         }
//     }
//     console.log(max);
// };
//
// maxNumArr(a = [1, 2, 3, 4, 5, 10]);


// - створити функцію яка повертає найменьше число з масиву
//
// let minNumArr = (arr) => {
//     let min = arr[0];
//     for (let z = 0; z < arr.length; z++) {
//         if (min > arr[z]) {
//             min = arr[z];
//         }
//     }
//     console.log(min);
// };
//
// minNumArr(a = [1, 2, 3, 4, 5, 10, 200, -10, 20, -50]);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//
// let a = 0;
//
// let sumArr = (arr,name) => {
//     for (let z of arr) {
//         name += z;
//     }
//     return name;
// };
//
// console.log(sumArr(c = [1, 2, 10], a));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//
// let a = 0;
//
// let serArf = (arr,name) => {
//     for (let z of arr) {
//         name += z;
//     }
//     return name = name / arr.length;
// };
//
// console.log(serArf(z = [20, 20, 10, 20, 10], a));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
//
// let maxNumArr = (arr) => {
//     let max = arr[0];
//     let min = arr[0];
//     for (let z = 0; z < arr.length; z++) {
//         if (max < arr[z]) {
//             max = arr[z];
//         }
//         if (min > arr[z]) {
//             min = arr[z];
//         }
//     }
//     console.log(max)
//     return min;
// };
//
// maxNumArr(a = [1, 2, 3, 4, 5, 10]);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// let a = [];
// let randomNumArray = (name) => {
//     for (let z = 0; z < 10; z++) {
//         name[z] = Math.round(Math.random() * 100);
//     }
//     return name;
// };
//
// console.log(randomNumArray(a))


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//
// let a = [];
// let randomArr = (name, size, limit) => {
//     for (let z = 0; z < size; z++) {
//         name[z] = Math.round(Math.random() * limit);
//     }
//     return name;
// };
//
// console.log(randomArr(a, 20, 100));
//

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//
// let a = [1, 2, 3];
// let b = [];
// let revArr = (arr,nameArr) => {
//     for (let z = arr.length - 1, y = 0; z > 0 , y < arr.length; z-- , y++) {
//         nameArr[y] = arr[z];
//     }
//     return nameArr;
// };
//
// console.log(revArr(a, b));