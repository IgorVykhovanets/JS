// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста
// (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

let postDetailsInfo = JSON.parse(localStorage.getItem('post-details'));

let postDetailsDiv = document.getElementsByClassName('postDetailsInfo')[0];


{
    let idElement = document.createElement('div');
    idElement.classList.add("idElement");
    idElement.innerText = postDetailsInfo.id;
    postDetailsDiv.appendChild(idElement);
    let titleElement = document.createElement('div');
    titleElement.classList.add('titleElement');
    titleElement.innerText = postDetailsInfo.title;
    postDetailsDiv.appendChild(titleElement);
    let bodyElement = document.createElement('div');
    bodyElement.classList.add('bodyElement');
    bodyElement.innerText = postDetailsInfo.body;
    postDetailsDiv.appendChild(bodyElement);
}

let commentListElement = document.getElementsByClassName('commentList')[0];

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(commentsList => commentsList.json())
    .then(comments => {
        for (let itemComment of comments) {
            if (postDetailsInfo.userId === itemComment.postId) {
                let commentDivElement = document.createElement('div');
                commentDivElement.classList.add('commentElement');
                commentListElement.appendChild(commentDivElement);
                let idElement = document.createElement('div');
                idElement.classList.add('idComment');
                idElement.innerText = itemComment.id;
                commentDivElement.appendChild(idElement);
                let nameElement = document.createElement('div');
                nameElement.classList.add('nameComment');
                nameElement.innerText = itemComment.name;
                commentDivElement.appendChild(nameElement);
                let emailElement = document.createElement('div');
                emailElement.classList.add('emailComment');
                emailElement.innerText = itemComment.email;
                commentDivElement.appendChild(emailElement);
                let bodyElement = document.createElement('div');
                bodyElement.classList.add('bodyComment');
                bodyElement.innerText = itemComment.body;
                commentDivElement.appendChild(bodyElement);
            }
        }
    });