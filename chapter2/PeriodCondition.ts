import DiscountCondition from "./DiscountCondition";
import Screening from "./Screening";

export default class PeriodCondition implements DiscountCondition {
    
    readonly date: Date;

    constructor(date: Date) {
        this.date = date;
    }


    isSatisfiedBy(screening: Screening): boolean {
        return true;
    }
}