import Customer from "./Customer";
import Screening from "./Screening";
import Money from "./Money";

export default class Reservation {
    customer: Customer;
    screening: Screening;
    fee: Money;
    audienceCount: number;

    constructor(customer: Customer,
        screening: Screening,
        fee: Money,
        audienceCount: number) {
            this.customer = customer;
            this.screening = screening;
            this.fee = fee;
            this.audienceCount = audienceCount;
    }
}