let hello = "hello world";
let lorem = "lorem ipsum";
let js = "javascript is cool";

// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let displayStringLength = (string) => console.log(string.length);
displayStringLength(hello);
displayStringLength(lorem);
displayStringLength(js);
console.log("");

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let capitalize = (string) => string.toUpperCase();
let helloCapitalized = capitalize(hello);
console.log(helloCapitalized);
let loremCapitalized = capitalize(lorem);
console.log(loremCapitalized);
let jsCapitalized = capitalize(js);
console.log(jsCapitalized);
console.log("");

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let decapitalize = (string) => string.toLowerCase();
console.log(decapitalize(helloCapitalized));
console.log(decapitalize(loremCapitalized));
console.log(decapitalize(jsCapitalized));
console.log("");

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let cleanStr = (string) => string.trim();
console.log(cleanStr(str));
console.log("");

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

let stringToArray = (string) => string.split(" ");
str = 'Каждый охотник желает знать';
let arr = stringToArray(str);
console.log(arr);
console.log("");

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.

let delete_characters = (str, length) => str.substr(0, length);
console.log(delete_characters(str, 7));
console.log("");

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
str = "HTML JavaScript PHP";
let insert_dash = (str) => str.toUpperCase().replaceAll(" ", "-");
console.log(insert_dash(str));
console.log("");

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let capitalizeFirstChar = (str) => str.replace(str[0], str[0].toUpperCase());
console.log(capitalizeFirstChar("hello world"));
console.log("");

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalizeEachWord = (str) => str.split(" ").map(item => capitalizeFirstChar(item)).join(" ");
console.log(capitalizeEachWord("helo world, it's me"));
console.log("");

