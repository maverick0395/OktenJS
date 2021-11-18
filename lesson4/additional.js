// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його,
// якщо два аргументи - складає або конкатенує їх між собою.

function func1(args) {
    if (arguments.length === 1) {
        console.log(arguments[0]);
    } else if (arguments.length === 2) {
        console.log((arguments[0] + arguments[1]));
    }
}

func1("100");
func1("100", "500");
console.log(" ");

// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

function sumArr(arr1, arr2) {
    let newArr = [];
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            newArr[i] = arr1[i] + arr2[i];
        }
        return newArr;
    } else {
        return "array lengths are not equal";
    }
}

console.log(sumArr([10, 20, 30, 40], [1, 2, 3, 4]));
console.log(" ");

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

function getKeysArray(arr) {
    let newArr = [];
    for (item of arr) {
        for (key in item) {
            newArr.push(key);
        }
    }
    return newArr;
}

console.log(getKeysArray([{name: 'Dima', age: 13}, {model: 'Camry'}]));
console.log(" ");

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

function getValuesArray(arr) {
    let newArr = [];
    for (item of arr) {
        for (key in item) {
            newArr.push(item[key]);
        }
    }
    return newArr;
}
console.log(getValuesArray([{name: 'Dima', age: 13}, {model: 'Camry'}]));