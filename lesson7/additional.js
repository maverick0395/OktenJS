// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }

class Person {
    constructor(id, name, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.adress = {
            street: street,
            suite: suite,
            city: city,
            zipcode: zipcode,
            geo: {
                lat: lat,
                lng: lng
            }
        };
        this.phone = phone;
        this.website = website;
        this.company = {
            companyName: companyName,
            catchPhrase: catchPhrase,
            bs: bs
        };
    }
}

let person1 = new Person(2, "Peter", "pete1984", "pete464@gmail.com",
    "Clemmence lane 24", 454, "Seatle", 475821, 54.585473, 78.747382,
    "+8729264749201", "webpete.com", "DunderMifflin", "We sell everything", "office papers");

console.log(person1);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

class Attr {
    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }

}

let aTag = new Tag("a", "Предназначен для создания ссылок. В зависимости от присутствия атрибутов name " +
    "или href тег <a> устанавливает ссылку или якорь.",
    [new Attr("accesskey", "Активация ссылки с помощью комбинации клавиш."),
          new Attr("href", "Задает адрес документа, на который следует перейти."),
          new Attr("download","Предлагает скачать указанный по ссылке файл.")]);
console.log(aTag);
console.log("");

let divTag = new Tag("div", "Элемент <div> является блочным элементом и предназначен для выделения " +
    "фрагмента документа с целью изменения вида содержимого.",
    [new Attr("align", "Задает выравнивание содержимого тега <div>."),
          new Attr("title", "Добавляет всплывающую подсказку к содержимому.")]);
console.log(divTag);
console.log("");

let h1Tag = new Tag("h1", "Тег <h1> представляет собой наиболее важный заголовок первого уровня",
    [new Attr("align", "Определяет выравнивание заголовка.")]);
console.log(h1Tag);
console.log("");

let spanTag = new Tag("span", "Тег <span> предназначен для определения строчных элементов документа. " +
    "В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть " +
    "информации внутри других тегов и установить для нее свой стиль. ",
    [new Attr("accesskey", "Позволяет получить доступ к элементу с помощью заданного сочетания клавиш."),
          new Attr("class", "Определяет имя класса, которое позволяет связать тег со стилевым оформлением.")]);
console.log(spanTag);
console.log("");

let inputTag = new Tag("input", "Тег <input> является одним из разносторонних элементов формы и позволяет " +
    "создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.",
    [new Attr("accept", "Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов."),
           new Attr("formaction", "Определяет адрес обработчика формы.")]);
console.log(inputTag);
console.log("");

let formTag = new Tag("form", "Тег <form> устанавливает форму на веб-странице. " +
    "Форма предназначена для обмена данными между пользователем и сервером.",
    [new Attr("action", "Адрес программы или документа, который обрабатывает данные формы."),
          new Attr("name", "Имя формы.")]);
console.log(formTag);
console.log("");

let optionTag = new Tag("option", "Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.",
    [new Attr("disabled", "Заблокировать для доступа элемент списка."),
          new Attr("label", "Указание метки пункта списка.")]);
console.log(optionTag);
console.log("");

let selectTag = new Tag("select", "Тег <select> позволяет создать элемент интерфейса в виде " +
    "раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. ",
    [new Attr("autofocus", "Устанавливает, что список получает фокус после загрузки страницы."),
          new Attr("multiple", "Позволяет одновременно выбирать сразу несколько элементов списка.")]);
console.log(selectTag);
console.log("");

