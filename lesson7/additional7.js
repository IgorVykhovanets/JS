// // - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// // Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// //
// // {
// //     id: 1,
// //     name: 'Leanne Graham',
// //     username: 'Bret',
// //     email: 'Sincere@april.biz',
// //     address: {
// //     street: 'Kulas Light',
// //         suite: 'Apt. 556',
// //         city: 'Gwenborough',
// //         zipcode: '92998-3874',
// //         geo: {
// //         lat: '-37.3159',
// //             lng: '81.1496'
// //     }
// // },
// //     phone: '1-770-736-8031 x56442',
// //     website: 'hildegard.org',
// //     company: {
// //     name: 'Romaguera-Crona',
// //         catchPhrase: 'Multi-layered client-server neural-net',
// //         bs: 'harness real-time e-markets'
// // }
// // }
//
// class User {
//     constructor(id, name, username, email, street, suite, city, zipcode, lat, lng,
//                 phone, website, Companyname, catchPhrase, bs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {
//             street: street, suite: suite, city: city, zipcode: zipcode, geo: {lat: lat, lng: lng}
//         }
//         this.phone = phone;
//         this.website = website;
//         this.company = {name: Companyname, catchPhrase : catchPhrase, bs: bs}
//     }
// }
//
// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light',
//     'Apt. 556', 'Gwenborough', 92998 - 3874, -37.3159, 81.1496, '1-770-736-8031 x56442',
//     'hildegard.org', 'Romaguera-Crona', 'Multi-layered client-server neural-net',
//     'harness real-time e-markets');
//
// console.log(user);
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
// -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }
//
// class InfoTag {
//     constructor(titleoftag, action, [attrs1, attrs2], titleofAttr1, actionOfAttr1, titleofAttr2, actionofAttr2) {
//         this.titleoftag = titleoftag;
//         this.action = action;
//         this.attrs1 = {titleofAttr: titleofAttr1, actionofAttr: actionOfAttr1}
//         this.attrs2 = {titleofAttr: titleofAttr2, actionofAttr: actionofAttr2}
//     }
// }
//
// let a = new InfoTag('a', 'Тег a является одним из важных элементов HTML и предназначен для создания ссылок.',
//     ['accesskey', 'coords'], 'accesskey', 'Активация ссылки с помощью комбинации клавиш.',
//     'coords', 'Устанавливает координаты активной области.'
// );
//
//
// let div = new InfoTag('div',
//     'является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     ['align', 'title'], 'align', 'Задает выравнивание содержимого тега ', 'title',
//     'Добавляет всплывающую подсказку к содержимому.');
//
// let h1 = new InfoTag('h1', 'Заголовок первого уровня', ['align', 'id'],
//     'align', 'Определяет выравнивание заголовка.', 'id',
//     'Указывает имя стилевого идентификатора.');
//
// let span = new InfoTag('span', 'предназначен для определения строчных элементов документа.', ['hidden', 'id'],
//     'hidden', 'Скрывает содержимое элемента от просмотра.', 'id',
//     'Указывает имя стилевого идентификатора.');
//
// let input = new InfoTag('input', 'создавать разные элементы интерфейса и обеспечить взаимодействие '
//     , ['accept', 'alt'], 'accept'
//     , 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.',
//     'alt', 'Альтернативный текст для кнопки с изображением.');
//
// let form = new InfoTag('form', 'устанавливает форму на веб-странице.', ['action', 'name'],
//     'action', 'Адрес программы или документа, который обрабатывает данные формы.', 'name',
//     'Имя формы');
//
// let option = new InfoTag('option', 'определяет отдельные пункты списка', ['label', 'value'],
//     'label', 'Указание метки пункта списка.', 'value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.');
//
// let select = new InfoTag('select', 'позволяет создать элемент интерфейса', ['name', 'size'], 'name',
//     'Имя элемента для отправки на сервер или обращения через скрипты.', 'size', 'Количество отображаемых строк списка.');
//
// console.log(a)
// console.log(div)
// console.log(h1)
// console.log(span)
// console.log(input)
// console.log(form)
// console.log(option)
// console.log(select);
