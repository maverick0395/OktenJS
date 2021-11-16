// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let arr1 = [];
for (let i = 0; i < 50; i++) {
    arr1[i] = i * 2;
}
console.log(arr1);
console.log(" ");

//. заповнити його 50 непарними числами за допомоги циклу.

let arr2 = [];
for (let i = 0; i < 50; i++) {
    arr2[i] = i * 2 + 1;
}
console.log(arr2);

// c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3[i] = Math.floor(Math.random() * 100);
}
console.log(arr3);
console.log(" ");

// Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4[i] = Math.floor(Math.random() * 724) + 8;
}
console.log(arr4);
console.log(" ");


let arr5 = [12, 9, 45, 46, 77, 78, 64, 80, 50, 63, 22, 90, 47, 95, 97, 76, 29, 62, 70, 44]
// 2. Вивести за допомогою console.log кожен третій елемен

for (let i = 2; i < arr5.length; i += 3) {
    console.log(arr5[i]);
}
console.log(" ");

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 2; i < arr5.length; i += 3) {
    if (arr5[i] % 2 === 0) {
        console.log(arr5[i]);
    }
}
console.log(" ");

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let new_arr = [];
for (let i = 2; i < arr5.length; i += 3) {
    if (arr5[i] % 2 === 0) {
        new_arr.push(arr5[i]);
    }
}
console.log(new_arr);
console.log(" ");

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 0; i < arr5.length; i++) {
    if (arr5[i + 1] % 2 === 0) {
        console.log(arr5[i]);
    }
}
console.log(" ");

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

let list = [100, 250, 50, 168, 120, 345, 188];
let general = 0;
for (num of list) {
    general += num;
}
let average = general / (list.length);
console.log(Math.round(average * 100) / 100);
console.log(" ");

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

let arr6 = [];
let arr7 = [];
for (let i = 0; i < 10; i++) {
    arr6[i] = Math.floor(Math.random() * 100);
    arr7[i] = arr6[i] * 5;
}
console.log(arr6);
console.log(arr7);
console.log(" ");

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

let arr8 = ['1', true, 5, 32, '542', 85, 'jfsa', false, [4, 5, 7]];
let arr9 = [];
for (el of arr8) {
    if (typeof el == 'number') {
        arr9.push(el);
    }
}
console.log(arr9);

/*- Дано 2 масиви з рівною кількістю об'єктів.
Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив
Example:
    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },
        // TO BE CONTINUED .....
    ] */

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];

for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0; j < citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithCities[i] = usersWithId[i];
            usersWithCities[i].address = citiesWithId[j];
        }
    }
}
console.log(usersWithCities);
console.log(" ");

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr10 = [12, 9, 45, 46, 77, 78, 64, 80, 50, 63];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] % 2 === 0) {
        console.log(arr10[i]);
    }
}
console.log(" ");

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr11 = [];
for (let i = 0; i < arr10.length; i++) {
    arr11[i] = arr10[i];
}
console.log(arr11);
console.log(" ");

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let letters = ['a', 'b', 'c'];
let str = '';
for (let i = 0; i < letters.length; i++) {
    str += letters[i];
}
console.log(str);
console.log(" ");

str = '';
let i = 0;
while (i < letters.length) {
    str += letters[i];
    i++;
}
console.log(str);
console.log(" ");

str = '';
for (element of letters) {
    str += element;
}
console.log(str);