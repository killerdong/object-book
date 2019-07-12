import DiscountPolicy from "./DiscountPolicy";
import Screening from "./Screening";
import Money from "./Money";
import DiscountCondition from "./DiscountCondition";

export default class AmountDiscountPolicy extends DiscountPolicy {

    discountAmount: Money;

    constructor(discountAmount: Money, ...conditions: Array<DiscountCondition>) {
        super(...conditions);
        this.discountAmount = discountAmount;
    }

    getDiscountAmount(screening: Screening): Money {
        return this.discountAmount;
    }
    
}