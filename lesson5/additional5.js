// - Дано натуральное число n. Выведите все числа от 1 до n.

// let n = +prompt('Уведіть число')
//
// let numberList = (number) => {
//     for (let z = 1; z <= number; z++) {
//         console.log(z);
//     }
//     return number
// };
//
// numberList(n)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

//
// let numList = (a, b) => {
//     if (a >= b) {
//         for (let z = 0; z <= a; z++) {
//             if (z >= b) {
//                 console.log(z);
//             }
//         }
//     } else if (b >= a) {
//         for (let y = b; y >= a; y--) {
//                 console.log(y);
//         }
//     }
// };
//
// numList(10, 0);
// console.log(`-----------`)
// console.log(`-----------`)
// numList(0, 10);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let foo = (arr, num) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === num) {
//             let numbers = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = numbers;
//         }
//     }
//     console.log(arr);
// };
//
// foo(a = [9, 8, 0, 4], 0);
// foo(b = [9, 8, 0, 4], 1);
// foo(c = [9, 8, 0, 4], 2);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

let arrElement = (arr) => {
    for (let z = 0; z < arr.length; z++) {
        if (arr[z] === 0) {
            let num = arr[z];
            arr[z] = arr[arr.length - 1];
            arr[arr.length - 1] = num;
        }
    }
    console.log(arr);
};

arrElement(a = [1, 0, 6, 0, 3]);
arrElement(b = [0, 1, 2, 3, 4]);

// Це завдання невдається зробити