// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(postElement => {
        let posts = postElement.json();
        return posts;
    })
    .then(post => {
        let allPostElement = document.getElementsByClassName('allPostElement')[0];
        for (let item of post) {
            let divElement = document.createElement('div');
            divElement.classList.add('post');
            allPostElement.appendChild(divElement);
            let idPost = document.createElement('div');
            idPost.classList.add('idElement');
            idPost.innerText = item.id;
            divElement.appendChild(idPost);
            let titlePost = document.createElement('div');
            titlePost.classList.add('titleElement');
            titlePost.innerText = item.title;
            divElement.appendChild(titlePost)
            let bodyPost = document.createElement('div');
            bodyPost.classList.add('bodyElement');
            bodyPost.innerText = item.body;
            divElement.appendChild(bodyPost);
        }
    });


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments')
    .then(commentsList => {
        let allComment = commentsList.json();
        return allComment;
    })
    .then(comments => {
        let allCommentsElement = document.getElementsByClassName('allCommentsElement')[0];
        for (let comment of comments) {
            let divElement = document.createElement('div');
            divElement.classList.add('comment');
            allCommentsElement.appendChild(divElement);
            let idComment = document.createElement('div');
            idComment.innerText = comment.id;
            idComment.classList.add('idElement');
            divElement.appendChild(idComment);
            let nameComment = document.createElement('div');
            nameComment.classList.add('titleElement');
            nameComment.innerText = comment.name;
            divElement.appendChild(nameComment)
            let emailComment = document.createElement('div');
            emailComment.classList.add('emailElement');
            emailComment.innerText = comment.email;
            divElement.appendChild(emailComment);
            let bodyComment = document.createElement('div');
            bodyComment.classList.add('bodyElement');
            bodyComment.innerText = comment.body;
            divElement.appendChild(bodyComment);
        }
    });
