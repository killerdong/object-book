const Bag = require('./bag');
const Ticket = require('./ticket');
const Util = require('../common/Util');


module.exports = class {
    constructor(bag) {
        Util.paramChecker(Bag, bag, 'bag는 Bag 클래스의 인스턴스이어야 합니다.');
        this.bag = bag;
    }

    getBag() {
        return this.bag;
    }

    buy(ticket) {
        Util.paramChecker(Ticket, ticket, 'ticket는 Ticket 클래스의 인스턴스이어야 합니다.');

        return this.bag.hold(ticket);
    }
}