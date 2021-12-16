
// Зробити свій розпорядок дня. // // У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.
// // Напиклад. // Прикнутись - 0.3с // Поснідати - 1с // Піти в душ - 0.5с // Дочекатись автобус - 3с // Пообідати - 1с // // І так далі


function randomDelay() {
    return (Math.floor(Math.random() * 3) + 1) * 1000;
}

function wakeUp(isWokeUp) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWokeUp) {
                resolve("I've woken up");
            } else {
                reject("I've overslept");
            }
        }, randomDelay())
    })
}

function brushTeeth(isReady) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isReady) {
                resolve("Feelin' fresh");
            } else {
                reject("Personal hygiene is for pussies");
            }
        }, randomDelay())
    })
}

function eatBreakfast(foodAreInStorage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (foodAreInStorage) {
                resolve("That was yummy");
            } else {
                reject("I forgot to by food");
            }
        }, randomDelay())
    })
}

function goToWork(isPossible) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isPossible) {
                resolve("I'm at work");
            } else {
                reject("Houston we've got a problem");
            }
        }, randomDelay())
    })
}

function goLunch(isLunchTime) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLunchTime) {
                resolve("Now I'm ready to get back to work");
            } else {
                reject("I'm starving")
            }
        }, randomDelay())
    })
}

function goBackHome(isFinishedJob) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isFinishedJob) {
                resolve("Home sweet home");
            } else {
                reject("I'm feelin' homesick");
            }
        }, randomDelay())
    })
}

function goRunning(isNotTired) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isNotTired) {
                resolve("Run, Forest, run");
            } else {
                reject("It's better to chill at home");
            }
        }, randomDelay())
    })
}

function goShower(isAvailable) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isAvailable) {
                resolve("That's a lot better");
            } else {
                reject("I prefer smelling like a real man")
            }
        }, randomDelay())
    })
}

function eatSupper(foodAreInStorage) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (foodAreInStorage) {
                resolve("Delicious");
            } else {
                reject("Maybe I have to lose some weight");
            }
        }, randomDelay())
    })
}

function goSleep(isLowPower) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isLowPower) {
                resolve("ZzZzZz");
            } else {
                reject("Let's watch some movie");
            }
        }, randomDelay())
    })
}

async function dailyRoutine() {
    console.log("Starting the day...");
    try {
        const awake = await wakeUp(true);
        console.log(awake);

        const cleanTeeth = await brushTeeth(awake);
        console.log(cleanTeeth);

        const breakfast = await eatBreakfast(cleanTeeth);
        console.log(breakfast);

        const work = await goToWork(breakfast);
        console.log(work);

        const lunch = await goLunch(work);
        console.log(lunch);

        const home = await goBackHome(lunch);
        console.log(home);

        const running = await goRunning(home);
        console.log(running);

        const supper = await eatSupper(running);
        console.log(supper);

        const sleep = await goSleep(supper);
        console.log(sleep);

        console.log("End of the day");

    } catch (e) {

        console.error(e);
    }
}

dailyRoutine();

