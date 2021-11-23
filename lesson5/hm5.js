// Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка обчислює та повертає площу прямокутника висотою

// let s = (a, b) => a * b;
//
// console.log(s(5, 5));

// - створити функцію яка обчислює та повертає площу кола

// let s = (r) => 3.14 * (r ** 2);
//
// console.log(s(5))

// - створити функцію яка обчислює та повертає площу циліндру
//
// let s = (r, h) => (2 * 3.14) * r * h;
//
// console.log(s(5, 5));

// - створити функцію яка приймає масив та виводить кожен його елемент
//
// let elementArr = (arr) => {
//     for (let z = 0; z < arr.length; z++) {
//         console.log(arr[z]);
//     }
// };
//
// elementArr(a = [1, 2, 3, 4, 5]);


// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//
// let pText = (text) => {
//     document.write(`<p>${text}</p>`);
// };
//
// pText('Hello')
// pText('okten');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// let list = (text) => {
//     document.write(`<ul>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`<li>${text}</li>`)
//     document.write(`</ul>`)
// };
//
// list('Hello Okten');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let list = (text, size) => {
//     document.write(`<ul>`)
//     for (let z = 0; z < size; z++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// };
//
// list('Hello okten', 5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let list = (arr) => {
//     for (let arrElement of arr) {
//         if (typeof arrElement === 'number') {
//             console.log(`Number List: ${arrElement}`);
//         }
//         if (typeof arrElement === 'string') {
//             console.log(`String list: ${arrElement}`);
//         }
//         if (typeof arrElement === 'boolean') {
//             console.log(`boolean List: ${arrElement}`);
//         }
//     }
// };
//
// list(a = [1, 2, 3, 4, 5]);
// list(a = ['hello', 'okten', 'school']);
// list(a = [true, false]);
// list(a = [1, 2, 3, 'hello', 'okten', true, false]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let y = [{name: 'Igor', id: 1, age: 21}];
//
// let objKeyElement = (arr) => {
//     for (let z of arr) {
//         for (let x in z) {
//             console.log(x);
//         }
//     }
// };
//
// objKeyElement(y);
//
// let objElement = (arr) => {
//     for (let c of arr) {
//         for (let o in c) {
//             console.log(c[o])
//         }
//     }
// };
//
// objElement(y);
