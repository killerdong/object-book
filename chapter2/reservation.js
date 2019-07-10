module.exports = class {
    constructor(
        customer,
        screening,
        fee,
        audienceCount
    ) {
        this.customer = customer;
        this.screening = screening;
        this.fee = fee;
        this.audienceCount = audienceCount;
    }
}