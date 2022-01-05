// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок
// виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок
// виводяться всі коментарі поточного поста

let usersList = document.getElementsByClassName('users')[0];
usersList.style.marginBottom = '100px';
let postsList = document.getElementsByClassName('posts')[0];
postsList.style.marginBottom = '100px';
let commentsList = document.getElementsByClassName('comments')[0];


fetch('https://jsonplaceholder.typicode.com/users')
    .then(usersL => usersL.json())
    .then(users => {
        for (let user of users) {
            let IdElement = document.createElement('div');
            IdElement.classList.add('id');
            IdElement.innerHTML = user.id;
            usersList.appendChild(IdElement);
            let NameElement = document.createElement('div');
            NameElement.classList.add('name');
            NameElement.innerHTML = user.name;
            usersList.appendChild(NameElement);
            let UserNameElement = document.createElement('div');
            UserNameElement.classList.add('username');
            UserNameElement.innerHTML = user.username;
            usersList.appendChild(UserNameElement);
            let emailElement = document.createElement('div');
            emailElement.classList.add('email');
            emailElement.innerHTML = user.email;
            usersList.appendChild(emailElement);
            let btnElement = document.createElement('button');
            btnElement.classList.add('btnElement');
            btnElement.innerText = 'click post';
            usersList.appendChild(btnElement);
            btnElement.onclick = () => {
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(posts => posts.json())
                    .then(postList => {
                        for (let post of postList) {
                            if (user.id === post.userId) {
                                let postID = document.createElement('div');
                                postID.classList.add('id');
                                postID.innerText = post.id;
                                postsList.appendChild(postID);
                                let titlePost = document.createElement('div');
                                titlePost.innerHTML = post.title;
                                titlePost.classList.add('title');
                                postsList.appendChild(titlePost);
                                let bodyPost = document.createElement('div');
                                bodyPost.classList.add('body');
                                bodyPost.innerHTML = post.body;
                                postsList.appendChild(bodyPost);
                                let btnPost = document.createElement('button');
                                btnPost.innerText = 'click comment';
                                btnPost.classList.add('button');
                                postsList.appendChild(btnPost);
                                btnPost.onclick = () => {
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(commentsList => commentsList.json())
                                        .then(comments => {
                                            for (let comment of comments) {
                                                if (post.userId === comment.postId) {
                                                    let idCommentElement = document.createElement('div');
                                                    idCommentElement.classList.add('id');
                                                    idCommentElement.innerHTML = comment.id;
                                                    commentsList.appendChild(idCommentElement);
                                                    let nameElement = document.createElement('div');
                                                    nameElement.classList.add('name');
                                                    nameElement.innerHTML = comment.name;
                                                    commentsList.appendChild(nameElement);
                                                    let emailElement = document.createElement('div');
                                                    emailElement.classList.add('email');
                                                    emailElement.innerHTML = comment.email;
                                                    commentsList.appendChild(emailElement);
                                                    let bodyElement = document.createElement('div');
                                                    bodyElement.classList.add('body');
                                                    bodyElement.innerHTML = comment.body;
                                                    commentsList.appendChild(bodyElement);
                                                }
                                            }
                                        });
                                };
                            }
                        }
                    });
            };
        }
    });