// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function rectArea(a, b) {
    let area = a * b;
    return area;
}

console.log(rectArea(10, 10));
console.log(" ");

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function circArea(r) {
    let area = Math.PI * r ** 2;
    return area;
}

console.log(circArea(5));
console.log(" ");

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function cylinderArea(h, r) {
    let area = 2 * Math.PI * r * (h + r);
    return area;
}

console.log(cylinderArea(10, 5));
console.log(" ");

// - створити функцію яка приймає масив та виводить кожен його елемент

function displayArrayElemets(arr) {
    for (element of arr) {
        console.log(element);
    }
}

displayArrayElemets([4, 5, 1, 34, 67, 91, 1, 0, 55, 26]);
console.log(" ");

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph("lorem ipsum");
console.log(" ");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function createUl3Li(text) {
    document.write('<ul>');
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write('</ul>');
}

createUl3Li('list item');
console.log(" ");

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createUlNLi (text, number) {
    document.write('<ul>');
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
createUlNLi('second list', 6);
console.log(" ");

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function createList(arr) {
    document.write('<ol>');
    for (element of arr) {
        document.write(`<li>${element}</li>`);
    }
    document.write('</ol>');
}
createList([true, 14, 'seven', false, 0]);
console.log(" ");

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.

function displayObjElements (arr) {
    for (element of arr) {
        document.write(`<div>${element.id} ${element.name} ${element.age}</div>`);
    }
}
let simpsons = [
    {
        id: 1,
        name: 'Bart',
        age: 10,
    },
    {
        id: 2,
        name: 'Homer',
        age: 40,
    },
    {
        id: 3,
        name: 'Marge',
        age: 38,
    },
    {
        id: 4,
        name: 'Lisa',
        age: 9,
    },
    {
        id: 5,
        name: 'Maggie',
        age: 1,
    },
]
displayObjElements(simpsons);