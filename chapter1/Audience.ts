import Bag from './Bag';
import Ticket from './Ticket';

export default class Audience {
    bag: Bag;

    constructor(bag: Bag) {
        this.bag = bag;
    }

    public buy(ticket: Ticket): number {

        return this.bag.hold(ticket);
    }
}