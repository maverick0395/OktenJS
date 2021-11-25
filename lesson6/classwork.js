// - Дано список імен.
let n1 = '   Harry.  .Potter   '
let n2 = '-----Ron---Whisley----'
let n3 = '&623Hermione_832_Granger$%^%#%'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let cleanStr = (str) => {
    let arr = [...str].map(item => item.toLowerCase() === item.toUpperCase() ? " " : item);
    let newArr = [];

    for (let i = 1; i <= arr.length; i++) {
        if (arr[i-1] !== " " || arr[i-1] === " " && arr[i] !== " ") {
            newArr.push(arr[i-1]);
        }
    }

    return newArr.join("").trim();
}

console.log(cleanStr(n1));
console.log(" ");

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let generateArray = (size) => {
    let arr = [];
    for (i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random()*101));
    }
    return arr;
}
let randomArr = generateArray(20);
console.log(randomArr);
console.log(" ");

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
console.log(randomArr.sort((a, b) => a - b));
console.log(" ");

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log(randomArr.filter(item => item % 2 === 0));
console.log(" ");

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
console.log(randomArr.map(item => item.toString()));
console.log(" ");

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let sortNums = (arr, direction) => {
    if (direction === 'asc') {
        return arr.sort((a, b) => a - b)
    } else if (direction === 'desc') {
        return arr.sort((a, b) => b - a)
    }
}
console.log(sortNums(generateArray(20), 'desc'));
console.log(" ");

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log(" ");

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(item => item.monthDuration > 5));
console.log(" ");

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString = (str, n) => {
    let newArr = [];
    for (let i = 0; i < str.length; i += n) {
        newArr.push(str.substr(i, n))
    }
    return newArr
}

console.log(cutString("Наслаждениеee", 3));
