// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал
// // элемент с id="text".
//
let btn1 = document.getElementsByClassName('button_1')[0];
let textElement = document.getElementById('text');
btn1.onclick = function () {
    textElement.style.display = 'none';
};


// //     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

let btn2 = document.getElementsByClassName('button_2')[0];
btn2.onclick = function () {
    btn2.style.display = 'none';
};

// // - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку
//зчитати інформацію
// // з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.forms.ageTable;
form.onsubmit = function (e) {
    e.preventDefault();
    if (+this.ageElement.value >= 18) {
        console.log('Вам 18 або більше років');
    } else {
        console.log('Вам менше ніж 18років');
    }
};

// // - Создайте меню, которое раскрывается/сворачивается при клике

let menuEl = document.getElementsByClassName('menuElement')[0];

menuEl.onclick = function () {
    menuEl.classList.toggle('closeMenu');
};

// - Создать список комментариев , пример объекта коментария
// - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.

let commentList = [
    {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem4', body: 'lorem ipsum dolo sit ameti'}
];
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

for (let i = 0; i < commentList.length; i++) {
    let commentEl = document.createElement('div');
    let titleEl = document.createElement('h2');
    let bodyEl = document.createElement('div');
    let btnEl = document.createElement('button');
    btnEl.innerText = 'click';
    titleEl.innerText = commentList[i].title;
    bodyEl.innerText = commentList[i].body;
    document.body.appendChild(commentEl);
    commentEl.appendChild(titleEl);
    commentEl.appendChild(bodyEl);
    commentEl.appendChild(btnEl);
    bodyEl.classList.add('style');
    btnEl.onclick = function () {
        bodyEl.classList.toggle('hidden');
    };
}




