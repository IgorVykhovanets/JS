// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
// которая имеет детальную информацию про текущий пост.
//

let detailsArrInfo = JSON.parse(localStorage.getItem('user-details'));

let userInfoDetails = document.getElementsByClassName('userDetailsInfo')[0];

{
    let idElement = document.createElement('div');
    idElement.classList.add('userID');
    idElement.innerText = detailsArrInfo.id;
    userInfoDetails.appendChild(idElement);
    let nameElement = document.createElement('div');
    nameElement.classList.add('userNAME');
    nameElement.innerText = detailsArrInfo.name;
    userInfoDetails.appendChild(nameElement)
    let usernameElement = document.createElement('div');
    usernameElement.classList.add('userUSERNAME');
    usernameElement.innerText = detailsArrInfo.username;
    userInfoDetails.appendChild(usernameElement);
    let emailElement = document.createElement('div');
    emailElement.classList.add('userEMAIL');
    emailElement.innerText = detailsArrInfo.email;
    userInfoDetails.appendChild(emailElement);
    let addressElement = document.createElement('div');
    addressElement.innerText = 'Address:';
    addressElement.classList.add('userADDRESS');
    userInfoDetails.appendChild(addressElement);
    let cityElement = document.createElement('div');
    cityElement.classList.add('userCITY');
    cityElement.innerText = detailsArrInfo.address.city;
    addressElement.appendChild(cityElement);
    let streetElement = document.createElement('div');
    streetElement.classList.add('userSTREET');
    streetElement.innerText = detailsArrInfo.address.street;
    addressElement.appendChild(streetElement);
    let suiteElement = document.createElement('div');
    suiteElement.classList.add('userSUITE');
    suiteElement.innerText = detailsArrInfo.address.suite;
    addressElement.appendChild(suiteElement);
    let zipCodeElement = document.createElement('div');
    zipCodeElement.classList.add('userZIPCODE');
    zipCodeElement.innerText = detailsArrInfo.address.zipcode;
    addressElement.appendChild(zipCodeElement);
    let geoElement = document.createElement('div');
    geoElement.classList.add('userGEO');
    geoElement.innerText = 'GEO:';
    addressElement.appendChild(geoElement);
    let latElement = document.createElement('div');
    latElement.classList.add('userGeoLat');
    latElement.innerText = detailsArrInfo.address.geo.lat;
    geoElement.appendChild(latElement);
    let lngElement = document.createElement('div');
    lngElement.classList.add('userGeoLng');
    lngElement.innerText = detailsArrInfo.address.geo.lng;
    geoElement.appendChild(lngElement);
    let phoneElement = document.createElement('div');
    phoneElement.classList.add('userPHONE');
    phoneElement.innerText = detailsArrInfo.phone;
    userInfoDetails.appendChild(phoneElement);
    let webSiteElement = document.createElement('div');
    webSiteElement.classList.add('userWEBSITE');
    webSiteElement.innerText = detailsArrInfo.website;
    userInfoDetails.appendChild(webSiteElement);
    let companyElement = document.createElement('div');
    companyElement.innerText = 'Copmany:';
    companyElement.classList.add('userCOMPANY');
    userInfoDetails.appendChild(companyElement);
    let companyNameElement = document.createElement('div');
    companyNameElement.classList.add('companyNAME');
    companyNameElement.innerText = detailsArrInfo.company.name;
    companyElement.appendChild(companyNameElement);
    let companyCatchPhrase = document.createElement('div');
    companyCatchPhrase.classList.add('companyCatchPhrase');
    companyCatchPhrase.innerText = detailsArrInfo.company.catchPhrase;
    companyElement.appendChild(companyCatchPhrase);
    let companyBS = document.createElement('div');
    companyBS.classList.add('companyBS');
    companyBS.innerText = detailsArrInfo.company.bs;
    companyElement.appendChild(companyBS);
    let btnElement = document.createElement('button');
    btnElement.classList.add('btnElement');
    btnElement.innerText = 'post of current user';
    userInfoDetails.appendChild(btnElement);
    btnElement.onclick = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(postsList => postsList.json())
            .then(posts => {
                for (let postItem of posts) {
                    if (detailsArrInfo.id === postItem.userId) {
                        let postDivElement = document.createElement('div');
                        postDivElement.classList.add('postElement');
                        postDivElement.innerText = postItem.title;
                        document.body.appendChild(postDivElement);
                        let btnPostElement = document.createElement('button');
                        btnPostElement.classList.add('btnPost');
                        btnPostElement.innerText = 'post details info';
                        postDivElement.appendChild(btnPostElement);
                        btnPostElement.onclick = () => {
                            location.href = 'post-details.html';
                            let postInfoElement = JSON.parse(localStorage.getItem('post-details')) || [];
                            postInfoElement = postItem;
                            localStorage.setItem('post-details', JSON.stringify(postInfoElement));
                        };
                    };
                };
            });
    };
};

