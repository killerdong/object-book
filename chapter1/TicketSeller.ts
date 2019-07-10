import TicketOffice from './TicketOffice';

export default class TicketSeller {

    ticketOffice: TicketOffice;

    constructor(ticketOffice: TicketOffice) {
        this.ticketOffice = ticketOffice;
    }

    getTicketOffice(): TicketOffice {
        return this.ticketOffice;
    }
}