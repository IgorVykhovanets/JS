// // Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// // максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// //
// //
// // function Constructor(model, producer, year,maxSpeed) {
// //     this.model = model;
// //     this.producer = producer;
// //     this.year = year;
// //     this.maxSpeed = maxSpeed;
// //     this.drive = function () {
// //         return console.log(`їдемо зі швидкістю ${maxSpeed}`);
// //     };
// //     this.info = function (arg) {
// //         if (arg === 'model') {
// //             return console.log(model);
// //         } else if (arg === 'producer') {
// //             return console.log(producer);
// //         } else if (arg === 'year') {
// //             return console.log(year);
// //         } else if (arg === 'maxSpeed') {
// //             return console.log(maxSpeed);
// //         } else {
// //             return console.log('error')
// //         }
// //     };
// //     this.increaseMaxSpeed = function (newSpeed) {
// //         return this.maxSpeed = this.maxSpeed + newSpeed;
// //     };
// //     this.changeYear = function (newValue) {
// //         return this.year = newValue;
// //     };
// //     this.addDriver = function (name) {
// //         return this.drive = name;
// //     };
// // }
// //
// // let car = new Constructor('BMW M4', 'Germany', 2021, 300);
// //
// // console.log(car)
// // car.drive();
// // car.info('model');
// // car.info('producer');
// // car.info('year');
// // car.info('maxSpeed');
// // car.increaseMaxSpeed(200);
// // console.log(car);
// // car.changeYear(2000);
// // console.log(car);
// // car.addDriver('Igor');
// // console.log(car);
// //
//
//
//
// // - (Те саме, тільки через клас)
// // Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// // class Car {
// //     constructor(model, producer, year, maxSpeed) {
// //         this.model = model;
// //         this.producer = producer;
// //         this.year = year;
// //         this.maxSpeed = maxSpeed;
// //         this.drive = function () {
// //             return console.log(`їдемо зі швидкістю ${maxSpeed}`);
// //         };
// //         this.info = function (arg) {
// //             if (arg === 'model') {
// //                 return console.log(model);
// //             } else if (arg === 'producer') {
// //                 console.log(producer);
// //             } else if (arg === 'year') {
// //                 return console.log(year);
// //             } else if (arg = 'maxSpeed') {
// //                 console.log(maxSpeed);
// //             } else {
// //                 return console.log('error');
// //             }
// //         };
// //         this.increaseMaxSpeed = function (newSpeed) {
// //             return this.maxSpeed = newSpeed;
// //         };
// //         this.changeYear = function (newValue) {
// //             return this.year = newValue;
// //         };
// //         this.addDriver = function (name) {
// //             this.drive = name;
// //         };
// //     }
// // }
// //
// // let car1 = new car('Mercedes e211', 'Germany', 2006, 280);
// // console.log(car1);
// // car1.drive();
// // car1.info('year');
// // car1.increaseMaxSpeed(200);
// // console.log(car1);
// // car1.changeYear(2010);
// // console.log(car1);
// // car1.addDriver('Vasya');
// // console.log(car1);
//
//
//
//
// // -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//
// class Popelushka {
//     constructor(name, age, shoeSize) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
// }
//
// let arr = [];
// for (let i = 0; i < 10; i++) {
//     arr[i] = new Popelushka('Cinderela' + i, 17 + i, 20 + i);
// }
// console.log(arr);
//
// // Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//
// class Prince {
//     constructor(name, age, shoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = shoe;
//     }
// }
//
// let prince = new Prince('Ivan', 20, 25);
//
// console.log(prince);
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// for (let z = 0; z < arr.length; z++) {
//     if (prince.shoe === arr[z].shoeSize) {
//         console.log(prince, arr[z]);
//     }
// }
// //     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
// console.log(arr.find(value => value.shoeSize === prince.shoe));
