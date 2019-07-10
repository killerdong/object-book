
export default class Ticket {
    fee: number;

    constructor(fee: number) {
        this.fee = fee;
    }

    getFee(): number {
        return this.fee;
    }
}