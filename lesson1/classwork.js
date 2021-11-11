// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let arr = [Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10), Math.floor(Math.random() * 10), Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)];

let sum = arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9];
console.log(arr, sum);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book1 = {
    name: 'Foundation',
    pages: 232,
    genre: 'sci-fi'
}


// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book2 = {
    name: 'Martin Eden',
    pages: 680,
    genre: 'novel',
}

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let book = [
    {
        name: 'Foundation',
        pages: 232,
        genre: 'sci-fi',
        author: 'Isaac Azimov'
    },
    {
        name: 'Martin Eden',
        pages: 680,
        genre: 'novel',
        author: 'Jack London'
    },
    {
        name: 'Siddhartha',
        pages: 320,
        genre: 'novel',
        author: 'Hermann Hesse'
    }
]

console.log(book[0]);
console.log(book[1]);
console.log(book[2]);


// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;
let s = height * width;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = Math.round(heightC * (Math.PI * (dC / 2)**2));
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = (n**2 + m**2)**0.5;
console.log(k);