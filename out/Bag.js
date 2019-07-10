"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bag {
    constructor(amount, invitation) {
        this.amount = amount;
        this.invitation = invitation;
    }
    hasInvitation() {
        return this.invitation !== null;
    }
    hasTicket() {
        return this.ticket !== null;
    }
    setTicket(ticket) {
        this.ticket = ticket;
    }
    minusAmount(amount) {
        this.amount -= amount;
    }
    plusAmount(amount) {
        this.amount == amount;
    }
}
exports.default = Bag;
;
//# sourceMappingURL=Bag.js.map