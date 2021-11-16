//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
console.log(" ");

// 2. перебрати його циклом for

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
console.log(" ");
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

i = 1;
while (i < arr.length) {
    console.log(arr[i]);
    i += 2;
}
console.log(" ");
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

for (let i = 1; i < arr.length; i += 2) {
    console.log(arr[i]);
}
console.log(" ");
// 5. перебрати циклом while та вивести  числа тільки парні  значення

i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i++;
}
console.log(" ");
// 6. перебрати циклом for та вивести  числа тільки парні  значення

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
console.log(" ");
// 7. замінити кожне число кратне 3 на слово "okten"

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
    console.log(arr[i]);
}
console.log(" ");
// 8. вивести масив в зворотньому порядку.

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
console.log(" ");

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

i = arr.length - 1;
while (i >= 0) {
    console.log(arr[i]);
    i--;
}
console.log(" ");

for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
console.log(" ");

i = arr.length - 1;
while (i >= 0) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
    i--;
}
console.log(" ");

for (let i = arr.length - 1; i >= 0; i--) {
    if (i % 2 !== 0) {
        console.log(arr[i]);
    }
}
console.log(" ");

i = arr.length - 1;
while (i >= 0) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    i--;
}
console.log(" ");

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
}
console.log(" ");

for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 3 === 0) {
        arr[i] = 'okten';
    }
    console.log(arr[i]);
}