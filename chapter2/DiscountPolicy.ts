import Money from "./Money";
import Screening from "./Screening";
import DiscountCondition from "./DiscountCondition";

export default abstract class DiscountPolicy {

    discountConditions: Array<DiscountCondition>;

    constructor(...discountConditions: Array<DiscountCondition>) {
        this.discountConditions = discountConditions;
    }

    calculateDiscountAmount(screening: Screening): Money {
        this.discountConditions.forEach(condition => {
            if (condition.isSatisfiedBy(screening)) {
                return this.getDiscountAmount(screening);
            }
        });

        return Money.ZERO;
    }

    abstract getDiscountAmount(screening: Screening): Money;
}