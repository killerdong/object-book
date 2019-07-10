"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TicketSeller {
    constructor(ticketOffice) {
        this.ticketOffice = ticketOffice;
    }
    sellTo(audience) {
        const { ticketOffice } = this;
        ticketOffice.plusAmount(audience.buy(ticketOffice.getTicket()));
    }
}
exports.default = TicketSeller;
//# sourceMappingURL=TicketSeller.js.map