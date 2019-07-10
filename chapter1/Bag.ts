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


    hasInvitation(): boolean {
        return this.invitation !== null;
    }

    hasTicket(): boolean {
        return this.ticket !== null;
    }

    setTicket(ticket: Ticket) {
        this.ticket = ticket;
    }

    minusAmount(amount: number): void {
        this.amount -= amount;
    }

    plusAmount(amount: number): void {
        this.amount == amount;
    }
};