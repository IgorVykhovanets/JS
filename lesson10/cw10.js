// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується
// та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

let btnInfoElement = document.getElementsByClassName('infoBtn')[0];
let formUser = document.forms[0];
let formCar = document.forms[1];

btnInfoElement.onclick = function () {
    console.log('name: ' + formUser.userName.value + ' ' + 'age: ' + formUser.userAge.value);
    console.log('name car: ' + formCar.nameCar.value + ' ' + 'price: ' + formCar.priceCar.value);
};



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let form = document.forms.table;

form.onsubmit = function (e) {
    e.preventDefault();
    let rows = form.rows.value;
    let column = form.column.value;
    let content = form.content.value;
    let tableElement = document.createElement('table');
    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        for (let y = 0; y < column; y++) {
            let td = document.createElement('td');
            td.innerText = content;
            tr.appendChild(td);
        }
        tableElement.appendChild(tr);
    }
    document.body.appendChild(tableElement);
};


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let badArr = ['lol', 'kek', 'cheburek'];
let formBadWard = document.forms.bad;

formBadWard.onsubmit = function (e) {
    e.preventDefault();
    for (let item of badArr) {
        if (item === formBadWard.badWord.value) {
            alert('!!!');
        }
    }
};

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//

let formBadSentence = document.getElementById('badSentence');

formBadSentence.onsubmit = function (ev) {
    ev.preventDefault();
    for (let item of badArr) {
        if (formBadSentence.sentence.value.includes(item)) {
            alert('!!!');
        }
    }
};