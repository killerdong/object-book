module.exports = class Money {
    constructor(amount) {
        this.amount = amount;
    }

    static wons(amount) {
        return new Money(amount);
    }

    static zero() {
        return Money.wons(0);
    }

    plus(money) {
        return new Money(this.amount + money.amount);
    }

    minus(money) {
        return new Money(this.amount - money.amount);
    }

    times(money) {
        return new Money(this.amount * money.amount);
    }

    isLessThan(money) {
        return this.amount < money.amount;
    }

    isGreaterThanOrEqual(money) {
        return this.amount >= money.amount;
    }

}