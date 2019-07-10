import TicketOffice from './TicketOffice';
import Audience from './Audience';

export default class TicketSeller {

    ticketOffice: TicketOffice;

    constructor(ticketOffice: TicketOffice) {
        this.ticketOffice = ticketOffice;
    }

    sellTo(audience: Audience): void {
        const {ticketOffice} = this;
        
        ticketOffice.plusAmount(audience.buy(ticketOffice.getTicket()));
    }
}