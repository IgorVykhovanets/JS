// Дано натуральное число n. Выведите все числа от 1 до n.

// let logNumber = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// };
//
// logNumber(100);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
// если A < B, или в порядке убывания в противном случае.

// let logNum = (a, b) => {
//     if (b > a) {
//         for (let i = b; i >= a; i--) {
//             console.log(i);
//         }
//     } else if (a > b) {
//         for (let i = b; i <= a; i++) {
//             console.log(b++);
//         }
//     }
// };
//
// logNum(255, 230);




// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let arr = [9, 8, 0, 4];
//
// let index1 = (arr, index) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (i === index) {
//             let number = arr[i];
//             arr[i] = arr[i + 1];
//             arr[i + 1] = number;
//         }
//     }
//     console.log(arr);
// };
//
// index1(arr, 2);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]


// let arrFunk = (nums) => {
//     let count = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== 0) {
//             nums[count++] = nums[i];
//         }
//     }
//     for (let i = count; i < nums.length; i++) {
//         nums[i] = 0;
//     }
//     console.log(nums)
// };
//
//
// arrFunk([1, 0, 6, 0, 3]);
//
// arrFunk([0, 1, 2, 3, 4]);
//
// arrFunk([0, 0, 1, 0]);
