// // 1) Напишіть код, який :
// // a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//
// let mainHeader = document.getElementById('main_header');
// mainHeader.classList.add('sep2021');
//
//
//
// // b) робить шириниу елементу ul 400px
//
// let ulList = document.getElementsByTagName('ul');
//
// for (let i = 0; i < ulList.length; i++) {
//     ulList[i].style.width = '400px';
// }
//
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
//
// let linkList = document.getElementsByClassName('linkList');
// for (let z = 0; z < linkList.length; z++) {
//     linkList[z].style.width = '50%';
// }
//
// // d) отримує текст який зберігається в елементі з класом listElement2
//
// function listTextElement(text) {
//     document.getElementsByClassName('listElement2').innerText = text;
// }
//
// listTextElement('hello Okten');
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
//
// let allLi = document.getElementsByTagName('li');
// for (let li = 0; li < allLi.length; li++) {
//     allLi[li].style.background = 'silver';
// }


// f) отримує всі елементи 'a' та додає їм клас anchor

// let aList = document.getElementsByTagName('a');
// for (let i = 0; i < aList.length; i++) {
//     aList[i].classList.add('anchor');
// }


// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

// let a = document.getElementsByTagName('a');
// for (let i = 0; i < a.length; i++) {
//     if (a[i].innerText === 'link3') {
//         a[i].style.fontSize = '40px';
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

// let a = document.getElementsByTagName('a');
// for (let aElement of a) {
//     let text = aElement.innerText;
//     aElement.classList.add(text);
// }
//
// // i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//
// let sub = document.getElementsByClassName('sub-header');
// for (let sub_header of sub) {
//     sub_header.style.background = prompt('Уведіть колір');
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// let sub = document.getElementsByClassName('sub-header');
// for (let s of sub) {
//     if (s.innerText === 'content 2 segment') {
//         s.style.color = prompt('Уведіть колір');
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//
// let content1 = document.getElementsByClassName('content_1');
// for (let content of content1) {
//     content.innerText = prompt('');
// }


// l) отримати елементи p та змінити їм padding на 20px
//
// let pElement = document.getElementsByTagName('p');
// for (let p of pElement) {
//     p.style.padding = '20px';
// }

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
//
// let text = document.getElementsByClassName('text2');
// for (let t of text) {
//     t.innerText = 'sep-2021';
// }
