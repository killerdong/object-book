import Screening from "./Screening";

export default interface DiscountCondition {
    isSatisfiedBy(screening: Screening): boolean;
}