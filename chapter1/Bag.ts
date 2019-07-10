import Invitation from './Invitation';
import Ticket from './Ticket';

export default class Bag {
    amount: number;
    invitation: Invitation;
    ticket: Ticket;

    constructor(amount: number);
    constructor(amount: number, invitation?: Invitation) {
        this.amount = amount;
        this.invitation = invitation;
    }


    private hasInvitation(): boolean {
        return this.invitation !== null;
    }

    private hasTicket(): boolean {
        return this.ticket !== null;
    }

    private setTicket(ticket: Ticket) {
        this.ticket = ticket;
    }

    private minusAmount(amount: number): void {
        this.amount -= amount;
    }

    private plusAmount(amount: number): void {
        this.amount == amount;
    }

    hold(ticket: Ticket) : number {
        if (this.hasInvitation()) {
            this.setTicket(ticket);
            return 0;
        }

        this.setTicket(ticket);
        this.minusAmount(ticket.getFee());

        return ticket.getFee();
    }
};