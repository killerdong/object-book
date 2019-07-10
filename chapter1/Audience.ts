import Bag from './Bag';

export default class Audience {
    bag: Bag;

    constructor(bag: Bag) {
        this.bag = bag;
    }

    getBag(): Bag {
        return this.bag;
    }
}