// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let n2 = 'Ron---Whisley';
// let n3 = 'Hermione__Granger';
//
// let repElement = (str) => str.replace('..', ' ').replace('---', ' ').replace('__', ' ');
//
// console.log(repElement(n1));
// console.log(repElement(n2));
// console.log(repElement(n3));



//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let a = [];
//
// let random = (arr,size) => {
//     for (let i = 0; i < size; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
// };
// random(a, 10);
// console.log(a)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// console.log(a.sort((a1, b) => a1 - b));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

// console.log(a.sort((a1, b) => a1 - b).filter(value => value % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// console.log(a.map(value => value + ''));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

// let nums = [11, 21, 3];
//
// let sortNums = (direction) => {
//     if (direction === 'ascending') {
//         return nums.sort((a1, b) => a1 - b);
//     } else if (direction === 'descending') {
//         return nums.sort((a1, b) => b - a1);
//     } else {
//         return 'error';
//     }
// };
//
// console.log(sortNums('ascending'));
// console.log(sortNums('descending'));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(value => {
//     if (value.monthDuration > 5) {
//         return value;
//     }
// }));