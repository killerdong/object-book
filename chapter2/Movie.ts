import Money from "./Money";
import Screening from "./Screening";
import Duration from "./Duration";
import DiscountPolicy from "./DiscountPolicy";

export default class Movie {

    fee: Money;
    title: string;
    runningTime: Duration;
    discountPolicy: DiscountPolicy;

    constructor(fee: Money,     
        title: string,
        runningTime: Duration,
        discountPolicy: DiscountPolicy) {
        this.fee = fee;
        this.title = title;
        this.runningTime = runningTime;
        this.discountPolicy = discountPolicy;
    }

    getFee() : Money {
        return this.fee;
    }

    calculateMovieFee(screening: Screening) {
        return this.fee.minus(this.discountPolicy.calculateDiscountAmount(screening));
    }
}