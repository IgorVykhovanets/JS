let userCard = (number) => {
    let time = new Date();
    this.balance = 100;
    this.key = number;
    this.historyLogs = [];
    this.transactionLimit = 100;
    let getCardsOptions = () => {
        return {balance : this.balance, key : number , historyLogs : this.historyLogs , TransactionLimit: this.transactionLimit}
    };
    let putCredits = (sum) => {
        this.balance += sum;
        this.historyLogs.push({operationType: 'Received credits', credits : sum , operationTime: time})
        return this.balance;
    };
    let takeCredits = (sum) => {
        if (this.balance >= sum) {
            this.balance -= sum;
            this.historyLogs.push({operationType: 'Withdrawal of credits', credits: sum, operationTime: time});
            return this.balance;
        } else {
            console.error('Недостатньо коштів на рахунку');
        }
    };
    let setTransactionLimit = (num) => {
        this.transactionLimit = num;
        this.historyLogs.push({operationType: 'Transaction limit change', credits : num , operationTime: time})
        return this.transactionLimit;
    };
    let transferCredits = (sumCredits, userCard) => {
        if (this.balance >= sumCredits && this.transactionLimit >= sumCredits) {
            this.balance = sumCredits - ((sumCredits / 100) * 0.5);
            let user = userCard.getCardsOptions();
            return user.balance = sumCredits - ((sumCredits / 100) * 0.5);
        }
    };
    return {
        getCardsOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
};




class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
        this.addCard = function () {
            if (cards.length <= 0) {
                cards.push(userCard(1));
            } else if (cards.length <= 1) {
                cards.push(userCard(2));
            } else if (cards.length <= 2) {
                cards.push(userCard(3));
            }
        };
        this.getCardByKey = function (key) {
            if (key === 1) {
                return cards[0];
            } else if (key === 2) {
                return cards[1];
            } else if (key === 3) {
                return cards[2];
            }
        };
    }
}

let user = new UserAccount('Bob', []);
user.addCard()
user.addCard()
let card1 = user.getCardByKey(1)
let card2 = user.getCardByKey(2)
card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);
card2.takeCredits(50);
console.log(card1.getCardsOptions());
console.log(card2.getCardsOptions());

