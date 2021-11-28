// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)'

function User(id, name, surname, email, phone) {
    this.id = id;
    this.personName = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let arr = [new User(1, "Jack", "Wallace", "jwallace@gmail.com", +8743914743),
    new User(2, "John", "Smith", "jsmith@gmail.com", +8764829265),
    new User(3, "Steve", "Willson", "swillson@gmail.com", +8746546845),
    new User(4,"Dan", "Cough", "dcough@gmail.com", +874654684684),
    new User(5,"Stacey", "Morgan", "smorgan@gmail.com", +874561564864),
    new User(6,"Deborah", "Johnson", "djohnson@gmail.com", +87646545684),
    new User(7,"Kevin", "Parker", "kparker@gmail.com", +8746546131),
    new User(8,"Glenn", "Pataky", "gpataky@gmail.com", +87456461818),
    new User(9,"Andrew", "Pester", "apester@gmail.com", +8756464215),
    new User(10,"Thomas", "Anderson", "tanderson@gmail.com", +87464646545)]

console.log(arr);
console.log(" ");

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log(arr.filter(user => user.id % 2 === 0));
console.log(" ");

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log(arr.sort((a, b) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.personName = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArr = [new Client(1, "Jack", "Wallace", "jwallace@gmail.com", +8743914743, ["pizza", "soda", "sauce"]),
    new Client(2, "John", "Smith", "jsmith@gmail.com", +8764829265, ["pizza"]),
    new Client(3, "Steve", "Willson", "swillson@gmail.com", +8746546845, ["pizza", "soda"]),
    new Client(4,"Dan", "Cough", "dcough@gmail.com", +874654684684, ["pizza", "soda", "sauce", "pizza", "soda"]),
    new Client(5,"Stacey", "Morgan", "smorgan@gmail.com", +874561564864, ["pizza", "soda", "sauce", "pizza", "soda", "sauce", "pizza", "soda"]),
    new Client(6,"Deborah", "Johnson", "djohnson@gmail.com", +87646545684, ["pizza", "soda"]),
    new Client(7,"Kevin", "Parker", "kparker@gmail.com", +8746546131, ["pizza"]),
    new Client(8,"Glenn", "Pataky", "gpataky@gmail.com", +87456461818, ["pizza", "pizza", "soda", "sauce", "pizza", "soda"]),
    new Client(9,"Andrew", "Pester", "apester@gmail.com", +8756464215, ["pizza", "soda", "sauce"]),
    new Client(10,"Thomas", "Anderson", "tanderson@gmail.com", +87464646545, ["pizza", "soda", "sauce", "pizza", "pizza", "soda"])]

console.log(clientArr);
console.log(" ");

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
clientArr.sort((a, b) => a.order.length - b.order.length);
