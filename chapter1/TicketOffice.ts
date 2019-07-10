import Ticket from './Ticket';
import Audience from './Audience';

export default class TicketOffice {

    amount: number;
    tickets: Array<Ticket>;

    constructor(amount: number, ...tickets: Array<Ticket>) {
        this.amount = amount;
        this.tickets = tickets;
    }

    private getTicket(): Ticket {
        return this.tickets.shift();
    }

    private minusAmount(amount: number): void {
        this.amount -= amount;
    }

    private plusAmount(amount: number): void {
        this.amount += amount;
    }

    sellTicketTo(audience: Audience): void {
        this.plusAmount(audience.buy(this.getTicket()));
    }
}