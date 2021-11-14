// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = Math.floor(Math.random() * 60);
if (time < 15) {
    console.log('this is first quarter');
    console.log(time);
} else if (time < 30) {
    console.log('this is second quarter');
    console.log(time);
} else if (time < 45) {
    console.log('this is third quarter');
    console.log(time);
} else {
    console.log('this is fourth quarter');
    console.log(time);
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = Math.floor(Math.random() * 31) + 1;
if (day <= 10) {
    console.log('This is first decade');
    console.log(day);
} else if (day <= 20) {
    console.log('This is second decade');
    console.log(day);
} else {
    console.log('this is third decade');
    console.log(day);
}

// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = prompt('Enter your value');
// Перший варіант
if (!!test !== true) {
    console.log('Вірно');
} else {
    console.log('Неправильно');
}

//Другий варіант
!!test !== true ? console.log('Вірно') : console.log('Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 1;
a !== 0 ? console.log('Вірно') : console.log('Невірно');

a = 0;
a !== 0 ? console.log('Вірно') : console.log('Невірно');

a = -3;
a !== 0 ? console.log('Вірно') : console.log('Невірно');


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let dayOfWeek = +prompt('Enter the number of the day in the week');
switch (dayOfWeek) {
    case 1:
        console.log('7:00 - wake up \n' +
                    '8:00 - go to work \n' +
                    '12:00 - lunch \n' +
                    '17:00 - go home \n' +
                    '18:00 - running \n' +
                    '19:00 - free time \n' +
                    '24:00 - go to bed \n');
        break;
    case 2:
        console.log('7:00 - wake up \n' +
            '8:00 - go to work \n' +
            '12:00 - lunch \n' +
            '17:00 - go home \n' +
            '18:00 - swimming \n' +
            '19:00 - free time \n' +
            '24:00 - go to bed \n');
        break;
    case 3:
        console.log('7:00 - wake up \n' +
            '8:00 - go to work \n' +
            '12:00 - lunch \n' +
            '17:00 - go home \n' +
            '18:00 - bike \n' +
            '19:00 - free time \n' +
            '24:00 - go to bed \n');
        break;
    case 4:
        console.log('7:00 - wake up \n' +
            '8:00 - go to work \n' +
            '12:00 - lunch \n' +
            '17:00 - go home \n' +
            '18:00 - running \n' +
            '19:00 - free time \n' +
            '24:00 - go to bed \n');
        break;
    case 5:
        console.log('7:00 - wake up \n' +
            '8:00 - go to work \n' +
            '12:00 - lunch \n' +
            '17:00 - go home \n' +
            '18:00 - swimming \n' +
            '19:00 - free time \n' +
            '24:00 - go to bed \n');
        break;
    case 6:
        console.log('8:00 - wake up \n' +
            '10:00 - go shopping \n' +
            '12:00 - cook dinner \n' +
            '14:00 - free time \n' +
            '18:00 - bike \n' +
            '19:00 - free time \n' +
            '24:00 - go to bed \n');
        break;
    case 7:
        console.log('8:00 - wake up \n' +
            '10:00 - cleaning \n' +
            '12:00 - cook dinner \n' +
            '14:00 - free time \n' +
            '24:00 - go to bed \n');
        break;
    default:
        console.log('Wrong input data');
}

// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

let isLeapYear = +prompt('Enter the year');
if (isLeapYear % 4 === 0) {
    console.log(isLeapYear);
    console.log('This is a leap year');
} else {
    console.log(isLeapYear);
    console.log("This isn't a leap year");
}

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let question = prompt('Яка "офіційна" назва JavaScript?');
if (question === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log("Не знаєте? ECMAScript!");
}