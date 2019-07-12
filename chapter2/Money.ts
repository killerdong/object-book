export default class Money {
    public static readonly ZERO = Money.wons(0);

    readonly amount: number;

    constructor(amount: number) {
        this.amount = amount;
    }

    static wons(amount: number): Money {
        return new Money(amount);
    }

    getAmount(): number {
        return this.amount;
    }

    plus(amount: Money): Money {
        return Money.wons(amount.getAmount() + this.amount);
    }

    minus(amount: Money): Money {
        return Money.wons(this.amount - amount.getAmount());
    }

    times(count: number): Money {
        return Money.wons(this.amount * count);
    }

    isLessThan(other: Money): boolean {
        return this.amount < other.getAmount();
    }

    greaterThanOrEqual(other: Money): boolean {
        return this.amount >= other.getAmount();
    }
}