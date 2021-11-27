// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function Person(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let a = new Person(1, 'Igor', 'Vykhovanets', 'igorvykhovanets@gmail.com', 380733276303);
//
//
// console.log(a);
//
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// let arr = [];
//
// for (let i = 0; i < 10; i++) {
//     arr[i] = new Person(i, 'Igor', 'Vykhovanets', `lol${i}@.gmail.com`, 38093000000 + i);
// }
// console.log(arr)
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
// console.log(arr.filter(value => value.id % 2 === 0));
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// console.log(arr.sort((a1, b) => a1.id - b.id));
//
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//
// class Client{
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client = new Client(1, 'Igor', 'Vykhovanets', 'lol@gmail.com', 930000007, ['Html', 'CSS', 'JavaScript']);
//
// console.log(client)
//
// // створити пустий масив, наповнити його 10 об'єктами Client
//
// let arr1 = [];
// arr1[0] = new Client(1, 'Igor', 'Vykhovanets', 'lol@gmail.com', 930000007, ['Html', 'CSS', 'JavaScript']);
// arr1[1] = new Client(2, 'Ivan', 'Rubak', 'lol@gmail.com', 930000007, ['HMTL', 'CSS', 'JavaScript', 'React']);
// arr1[2] = new Client(3, 'Vasya', 'Kokos', 'lol@gmail.com', 930000007, ['HMTL', 'CSS', 'JavaScript', 'React', 'Angular']);
// arr1[3] = new Client(4, 'Stepan', 'Rubik', 'lol@gmail.com', 930000007, ['HMTL', 'CSS', 'JavaScript']);
// arr1[4] = new Client(5, 'Maria', 'Rubak', 'lol@gmail.com', 930000007, ['HMTL', 'CSS', 'JavaScript', 'React','Python','Java']);
// arr1[5] = new Client(6, 'Misha', 'Slon', 'lol@gmail.com', 930000007, ['HMTL', 'CSS']);
// arr1[6] = new Client(7, 'Anna', 'Lorem', 'lol@gmail.com', 930000007, ['HMTL', 'CSS', 'JavaScript']);
// arr1[7] = new Client(8, 'Nurlan', 'Kurbasov', 'lol@gmail.com', 930000007, ['HMTL', 'CSS', 'JavaScript', 'React','Angular','php','C++','java']);
// arr1[8] = new Client(9, 'Liza', 'Arbuzova', 'lol@gmail.com', 930000007, ['HMTL']);
// arr1[9] = new Client(10, 'Arsen', 'Rus', 'lol@gmail.com', 930000007, ['HMTL', 'CSS']);
//
// console.log(arr1)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
// console.log(arr1.sort((a1, b) => a1.order.length - b.order.length));