// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = () => console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    this.info = () => {
        for (const key in this) {
            if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }
    this.increaseMaxSpeed = (newSpeed) => this.maxSpeed += newSpeed;
    this.changeYear = (newValue) => this.year = newValue;
    this.addDriver = (driver) => this.driver = driver;
}

let chevr = new Car("Impala", "Chevrolet", 1967, 240, 3.5);
let driver1 = {
    name: "John",
    surname: "Pester"
}

chevr.increaseMaxSpeed(30);
chevr.addDriver(driver1);
chevr.changeYear(1970);
chevr.info();
console.log(chevr.driver);
console.log(" ");

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Auto {
    constructor(model, producer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    }
    info() {
        for (const key in this) {
            if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
}

let toyota = new Auto('corolla', 'toyota', 2000, 200, 2.4);
toyota.increaseMaxSpeed(10);
toyota.changeYear(2002);
toyota.addDriver({name: "Kevin", surname: "Parker"});
toyota.info();
console.log(toyota.driver);
console.log(" ");

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;

    }

}

let arrOfCinderellas = [new Cinderella("Alice", 19, 37.5),
    new Cinderella("Jane", 20, 38),
    new Cinderella("Marry", 21, 39),
    new Cinderella("Kate", 18, 40),
    new Cinderella("Lucy", 19, 41),
    new Cinderella("Ann", 18, 42),
    new Cinderella("Stacey", 22, 40.5),
    new Cinderella("Chloey", 22, 41.5),
    new Cinderella("Abby", 23, 39.5),
    new Cinderella("Lora", 20, 38.5)
]

let prince = new Prince("Gregory", 24, 38)
for (let cinderella of arrOfCinderellas) {
    if (cinderella.footSize === prince.shoe) {
        console.log(cinderella);
    }
}
console.log(" ");

console.log(arrOfCinderellas.find(cinderella => cinderella.footSize === prince.shoe));