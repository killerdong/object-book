"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Audience {
    constructor(bag) {
        this.bag = bag;
    }
    buy(ticket) {
        if (this.bag.hasInvitation()) {
            this.bag.setTicket(ticket);
            return 0;
        }
        this.bag.minusAmount(ticket.getFee());
        this.bag.setTicket(ticket);
        return ticket.getFee();
    }
}
exports.default = Audience;
//# sourceMappingURL=Audience.js.map