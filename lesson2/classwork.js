// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let a = +prompt('Enter your first number');
let b = +prompt('Enter your second number');

if (a > b) {
    console.log(a);
} else if (a < b) {
    console.log(b);
} else if (a === b) {
    console.log(`The numbers a and b are equal ${a} = ${b}`);
}


// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let flatNumber = Math.floor(Math.random()*90) + 1;
if (flatNumber <=20) {
    console.log(flatNumber);
    console.log('The flat is in the first section of the house');
} else if (flatNumber <=48) {
    console.log(flatNumber);
    console.log('The flat is in the second section of the house');
} else if (flatNumber <=90) {
    console.log(flatNumber);
    console.log('The flat is in the third section of the house');
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

let number = +prompt("Enter your number") === 10? console.log('ВІРНО') : console.log('НЕВІРНО');

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x = true;
if (typeof x === "number") {
    console.log(1);
} else if (typeof x === "string") {
    console.log(2);
} else if (typeof x === "boolean" || typeof x === "object") {
    console.log(3);
} else {
    console.log('Wrong data');
}

//- Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
// Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
// Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temp = +prompt("Enter the temperature value");
if (temp >=10 && temp <=22) {
    console.log('Ми йдемо ВЧИТИСЯ');
} else {
    console.log('Сидимо вдома і вчимося ОНЛАЙН');
}

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

let option = +prompt("Enter your number");
switch (option) {
    case 1:
        console.log('You win a car!');
        break;
    case 2:
        console.log('You win a motobike!');
        break;
    case 3:
        console.log('You win a phone!');
        break;
    case 4:
        console.log('You win a radio!');
        break;
    case 5:
        console.log('You win a pen!');
        break;
    default:
        console.log('Not your lucky day.');
}