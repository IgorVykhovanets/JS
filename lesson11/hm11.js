// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

let form = document.forms.userInfo;
let button = document.getElementsByTagName('button')[0];

form.onsubmit = (ev) => {
    ev.preventDefault();
    let name = form.userName.value;
    let age = form.userAge.value;
    localStorage.setItem('user' , JSON.stringify({name , age}))
};
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let formCar = document.forms.carInfo;

formCar.onsubmit = (ev) => {
    ev.preventDefault();
    let model = formCar.model.value;
    let type = formCar.type.value;
    let volume = formCar.volume.value;
    let carObj = {model , type , volume}
    let cars = localStorage.getItem('car');
    if (!cars) {
        let car = [];
        car.push(carObj);
        localStorage.setItem('cars', JSON.stringify(car));
    }
};
