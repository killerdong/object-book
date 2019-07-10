import Bag from './Bag';
import Ticket from './Ticket';

export default class Audience {
    bag: Bag;

    constructor(bag: Bag) {
        this.bag = bag;
    }

    public buy(ticket: Ticket): number {
        if (this.bag.hasInvitation()) {
            this.bag.setTicket(ticket);

            return 0;
        } 

        this.bag.minusAmount(ticket.getFee());
        this.bag.setTicket(ticket);

        return ticket.getFee();
    }
}