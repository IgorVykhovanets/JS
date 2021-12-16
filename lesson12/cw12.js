// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста.
// при кліку на яку виводяться в окремий блок всі коментарі поточного поста.com/comments

let index = 1;

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(allPost => {
        let posts = allPost.json();
        return posts;
    })
    .then(post => {
        let allPostList = document.getElementsByClassName('allPostList')[0];
        for (let itemPost of post) {
            let divElement = document.createElement('div');
            divElement.classList.add('post-' + index++);
            allPostList.appendChild(divElement);
            let idElement = document.createElement('div');
            idElement.classList.add('idElement');
            idElement.innerText = itemPost.id;
            divElement.appendChild(idElement);
            let titleElement = document.createElement('div');
            titleElement.classList.add('titleElement');
            titleElement.innerText = itemPost.title;
            divElement.appendChild(titleElement);
            let bodyElement = document.createElement('div');
            bodyElement.classList.add('bodyElement');
            bodyElement.innerText = itemPost.body;
            divElement.appendChild(bodyElement);
            let btnElement = document.createElement('button');
            btnElement.innerText = 'click';
            btnElement.classList.add('btnElement')
            divElement.appendChild(btnElement);
            btnElement.onclick = () => {
                let divElementPost = document.createElement('div');
                divElementPost.innerText = `${itemPost.id} --- ${itemPost.title} --- ${itemPost.body}`;
                divElementPost.classList.add('divElementPost');
                document.body.appendChild(divElementPost)
            };
        }
    });


