// - Дано натуральное число n. Выведите все числа от 1 до n.

let displayNumbersTillN = (n) => {
    for (let i = 1; i <= n; i++) {
        console.log(i);
    }
}

displayNumbersTillN(10);
console.log(" ");

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
let displayNumbersFromAToB = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else if (a > b) {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
}

displayNumbersFromAToB(13, 1);
console.log(" ");

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]


let changeArrayElementAtI = (arr, i) => {
    let currentEl = arr[i];
    arr[i] = arr[i + 1]
    arr[i + 1] = currentEl;
    return arr;
}

console.log(changeArrayElementAtI([9, 8, 0, 4], 0));
console.log(" ");

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
//     Двожина масиву від 2 до 100
// EXAMPLE:
//     [1,0,6,0,3] => [1,6,3,0,0]
//     [0,1,2,3,4] => [1,2,3,4,0]
//     [0,0,1,0]   => [1,0,0,0]

let moveZerosToEnd = (arr) => {
    let newArr = [];
    let zeroCounter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr[i - zeroCounter] = arr[i];
        } else if (arr[i] === 0) {
            zeroCounter++;
        }
    }
    for (let j = 0; j < zeroCounter; j++) {
        newArr[newArr.length] = 0;
    }
    return newArr;
}

console.log(moveZerosToEnd([1, 0, 6, 0, 3, 0, 0, 0, 0, 0, 5]));
console.log(moveZerosToEnd([0, 1, 2, 3, 4]));
console.log(moveZerosToEnd([0, 0, 1, 0]));
