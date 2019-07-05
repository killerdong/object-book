const TicketSeller = require('./ticketSeller');
const Audience = require('./audience');


module.exports = class {
    constructor(ticketSeller) {
        if (!(ticketSeller instanceof TicketSeller)) {
            throw new Error('ticketSeller 는 TicketSeller 클래스의 인스턴스이어야 합니다.');
        }

        this.ticketSeller = ticketSeller;
    }

    enter(audience) {
        if (!(audience instanceof Audience)) {
            throw new Error('audience 는 Audience 클래스의 인스턴스이어야 합니다.');
        }

        if (audience.getBag().hasInvitation()) {
            const ticket = this.ticketSeller.getTicketOffice().getTicket();
            audience.getBag().setTicket(ticket);                
        } else {
            const ticket = this.ticketSeller.getTicketOffice().getTicket();
            audience.getBag().setTicket(ticket);
    
            this.ticketSeller.getTicketOffice().plusAmount(ticket.getFee());
            audience.getBag().minusAmount(ticket.getFee());
        }
    }
}