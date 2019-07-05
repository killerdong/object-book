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

        if (this.bag.hasInvitation()) {
            this.bag.setTicket(ticket);
            return 0;
        } else {
            const usedFee = ticket.getFee();

            this.bag.setTicket(ticket);
            this.bag.minusAmount(usedFee);

            return usedFee;
        }

    }
}