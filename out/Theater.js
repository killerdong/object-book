"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Theater {
    constructor(ticketSeller) {
        this.ticketSeller = ticketSeller;
    }
    enter(audience) {
        if (audience.getBag().hasInvitation()) {
            const ticket = this.ticketSeller.getTicketOffice().getTicket();
            audience.getBag().setTicket(ticket);
        }
        else {
            const ticket = this.ticketSeller.getTicketOffice().getTicket();
            audience.getBag().minusAmount(ticket.getFee());
            this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
            audience.getBag().setTicket(ticket);
        }
    }
}
exports.default = Theater;
//# sourceMappingURL=Theater.js.map