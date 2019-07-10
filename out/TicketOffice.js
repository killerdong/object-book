"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TicketOffice {
    constructor(amount, ...tickets) {
        this.amount = amount;
        this.tickets = tickets;
    }
    getTicket() {
        return this.tickets.shift();
    }
    minusAmount(amount) {
        this.amount -= this.amount;
    }
    plusAmount(amount) {
        this.amount += this.amount;
    }
}
exports.default = TicketOffice;
//# sourceMappingURL=TicketOffice.js.map