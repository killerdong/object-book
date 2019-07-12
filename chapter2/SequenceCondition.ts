import DiscountCondition from "./DiscountCondition";
import Screening from "./Screening";

export default class SequenceCondition implements DiscountCondition {
    
    readonly sequence: number;

    constructor(sequence: number) {
        this.sequence = sequence;
    }


    isSatisfiedBy(screening: Screening): boolean {
        return screening.isSequence(this.sequence);
    }
}