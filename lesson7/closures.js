function userCard(number) {
    let card = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: number
    }
    let cardOptions = {
        getCardOptions: function () {
            return card
        },
        putCredits: function (amount) {
            let now = new Date();
            let datetime = now.getDay() + '/' + now.getMonth() + '/' + now.getFullYear() + ', ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            card.balance += amount;
            card.historyLogs.push({operationType : "Received credits", credits : amount, operationTime : datetime});
        },
        takeCredits: function (amount) {
            let now = new Date();
            let datetime = now.getDay() + '/' + now.getMonth() + '/' + now.getFullYear() + ', ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            card.balance -= amount;
            card.historyLogs.push({operationType: "Withdrawal of credits", credits : amount, operationTime: datetime});
        },
        setTransactionLimit: function (limit) {
            let now = new Date();
            let datetime = now.getDay() + '/' + now.getMonth() + '/' + now.getFullYear() + ', ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
            card.transactionLimit = limit;
            card.historyLogs.push({operationType: "Transaction limit change", credits : limit, operationTime: datetime});
        },
        transferCredits: function (amount, targetCard) {
            let amountWithComission = amount + amount*0.005;
            if (card.balance >= amountWithComission && card.transactionLimit >= amountWithComission) {
                card.balance -= amountWithComission;
                targetCard.putCredits(amount);
            }
        }
    }
    return cardOptions
}

let card1 = userCard(1);
let card2 = userCard(2);
card1.putCredits(200);
card1.takeCredits(30);
card1.setTransactionLimit(500);
card1.transferCredits(200, card2);
console.log(card1.getCardOptions());
console.log(card2.getCardOptions());
console.log("-------");

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard(card) {
        if (this.cards.length < 3) {
            this.cards.push(card);
        }
    }
    getCardByKey(key) {
            for (const card of this.cards) {
                if (card.getCardOptions().key === key) {
                    return card.getCardOptions();
                }
            }
        }
}

let user1 = new UserAccount("Bill");
user1.addCard(card1);
user1.addCard(card2);
console.log(user1.getCardByKey(1));