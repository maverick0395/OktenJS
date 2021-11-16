//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let num_arr = [1, 2, 3, 4, 5];
let str_arr = ['a', 'b', 'c', 'd', 'e'];
let var_arr = ['string', 34, true, 9, false];
console.log(num_arr);
console.log(str_arr);
console.log(var_arr);
console.log(" ");

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = i;
}
console.log(arr);
console.log(" ");

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write('<div>div</div>');
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>div ${i + 1}</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write("<h1>Title</h1>");
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let j = 0;
while (j < 20) {
    document.write(`<h1>Title ${j + 1}</h1>`);
    j++;
}

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const element of arr1) {
    console.log(element);
}
console.log(" ");

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
for (const element of arr2) {
    console.log(element);
}
console.log(" ");

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let arr3 = [true, 'ccc', 45, 89, false, 'foo', 'bar', 'spam', 4, 'eggs'];
for (const element of arr3) {
    console.log(element);
}
console.log(" ");

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr4 = [50, true, 'string', false, 'abc', 12, 'hello', 99, true, false];
for (const element of arr4) {
    if (typeof element === 'boolean') {
        console.log(element);
    }
}
console.log(" ");

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arr5 = [50, true, 'string', false, 'abc', 12, 'hello', 99, true, false];
for (const element of arr5) {
    if (typeof element === 'number') {
        console.log(element);
    }
}
console.log(" ");

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arr6 = [50, true, 'string', false, 'abc', 12, 'hello', 99, true, false];
for (const element of arr6) {
    if (typeof element === 'string') {
        console.log(element);
    }
}