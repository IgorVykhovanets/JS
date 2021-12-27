// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

let indexUser = 1;

let userListElement = document.getElementsByClassName('userLIST')[0];

fetch('https://jsonplaceholder.typicode.com/users')
    .then(usersArray => usersArray.json())
    .then(users => {
        for (let itemUser of users) {
            let divUser = document.createElement('div');
            divUser.classList.add('user-' + indexUser++);
            userListElement.appendChild(divUser);
            let UserIdElement = document.createElement('div');
            UserIdElement.classList.add('userID');
            UserIdElement.innerText = itemUser.id;
            divUser.appendChild(UserIdElement);
            let UserNameElement = document.createElement('div');
            UserNameElement.classList.add('userNAME');
            UserNameElement.innerText = itemUser.name;
            divUser.appendChild(UserNameElement);
            let btnElement = document.createElement('button');
            btnElement.classList.add('btnELEMENT');
            btnElement.innerText = 'details information';
            divUser.appendChild(btnElement);
            btnElement.onclick = () => {
                location.href = "user-details.html";
                let userDetailsInfo = JSON.parse(localStorage.getItem('user-details')) || [];
                userDetailsInfo = itemUser;
                localStorage.setItem('user-details', JSON.stringify(userDetailsInfo));
            };
        }
});


