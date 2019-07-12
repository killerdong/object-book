import DiscountPolicy from "./DiscountPolicy";
import Screening from "./Screening";
import Money from "./Money";
import DiscountCondition from "./DiscountCondition";

export default class PercentDiscountPolicy extends DiscountPolicy {

    percentage: number;

    constructor(percentage: number, ...conditions: Array<DiscountCondition>) {
        super(...conditions);
        this.percentage = percentage;
    }

    getDiscountAmount(screening: Screening): Money {
        return screening.getMovieFee().times(this.percentage);
    }
}