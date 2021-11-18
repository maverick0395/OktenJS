// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

function findMin(a, b, c) {
    let min = a;
    for (number of arguments) {
        if (number < min) {
            min = number;
        }
    }
    console.log(min);
}

findMin(10, 2, -1);
console.log(" ");

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

function findMax(a, b, c) {
    let max = a;
    for (number of arguments) {
        if (number > max) {
            max = number;
        }
    }
    console.log(max);
}

findMax(-5, -2, -1);
console.log(" ");

// - створити функцію яка повертає найбільше число з масиву

function displayGreatest(arr) {
    let max = arr[0];
    for (element of arr) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}

console.log(displayGreatest([30, 5, 87, 45, 101, 44, 1, 22]));
console.log(" ");

// - створити функцію яка повертає найменьше число з масиву

function displayLeast(arr) {
    let min = arr[0];
    for (element of arr) {
        if (element < min) {
            min = element;
        }
    }
    return min;
}

console.log(displayLeast([30, 5, 87, 45, 101, 44, 1, 22]));
console.log(" ");

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function getSum(arr) {
    let sum = 0;
    for (element of arr) {
        sum += element;
    }
    return sum;
}

console.log(getSum([30, 5, 87, 45, 101, 44, 1, 22]));
console.log(" ");

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

function getAverage(arr) {
    let sum = 0;
    for (element of arr) {
        sum += element;
    }
    return sum / (arr.length);
}

console.log(getAverage([30, 5, 87, 45, 101, 44, 1, 22]));
console.log(" ");

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function getLeastdisplayGreatest(args) {
    let min = arguments[0];
    let max = arguments[0];
    for (element of arguments) {
        if (element < min) {
            min = element;
        }
        if (element > max) {
            max = element;
        }
    }
    console.log(max);
    return min;
}

console.log(getLeastdisplayGreatest(4, 7, 13, 2, 45, 99));
console.log(" ");

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

function generateRandomArr(size) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.round(Math.random()*100)
    }
    console.log(arr);
}
generateRandomArr(10);
console.log(" ");

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.

function generateRandomArrWithLimit (size, limit) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr[i] = Math.round(Math.random()*(limit));
    }
    console.log(arr);
}
generateRandomArrWithLimit(10, 10);
console.log(" ");

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

function reverseArr (arr) {
    let newArr = [];
    for (let i = arr.length - 1, j = 0; i >= 0; i--, j++) {
        newArr[j] = arr[i];
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = newArr[i];
    }
}

let arr1 = [1, 2, 3, 4, 5];
reverseArr(arr1);
console.log(arr1);

