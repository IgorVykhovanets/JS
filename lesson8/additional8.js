// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

let rulesElement = document.getElementsByClassName('rules');


let arr = [];

let rec = (num) => {
    arr.push(rulesElement[num].classList[1]);
    num++;
    if (num === 8) {
        return arr;
    }
    rec(num);
};
rec(0);

console.log(arr);

