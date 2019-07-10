import Ticket from './Ticket';

export default class TicketOffice {

    amount: number;
    tickets: Array<Ticket>;

    constructor(amount: number, ...tickets: Array<Ticket>) {
        this.amount = amount;
        this.tickets = tickets;
    }

    getTicket(): Ticket {
        return this.tickets.shift();
    }

    minusAmount(amount: number): void {
        this.amount -= this.amount;
    }

    plusAmount(amount: number): void {
        this.amount += this.amount;
    }
}