// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

let validateEmail = (str) => {
    console.log(str.indexOf("@"));
    if (str.indexOf('@') < 1) {
        return 'Invalid input!';
    } else if (str.indexOf(".") - str.indexOf("@") <= 2) {
        return 'Invalid input!';
    }
    return (`email ${str.toLowerCase()} is validated`);
}

console.log(validateEmail("someemail@gmail.com"));
console.log(validateEmail("someeMAIL@gmail.com"));
console.log(validateEmail("someeMAIL@i.ua"));
console.log(validateEmail("some.email@gmail.com"));
console.log("");

// - є масив

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length));
console.log(" ");

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => {
    let result = [...str].reduce((counter, current) => {
        if (current.toLowerCase() === stringsearch) {
            counter++;
        }
        return counter;
    }, 0);
    return result;
}
let symb = "а", str = "Астрономия это наука о небесных объектах";
console.log(count(str, symb));
console.log(" ");

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString = (str, n) => str.split(" ").slice(0, n).join(" ");
str = "Сила тяжести приложена к центру масс тела";
console.log(cutString(str, 5));