const Ticket = require('./ticket');
const Util = require('../common/Util');

module.exports = class {
    constructor(amount, ...tickets) {
        if (!Number.isInteger(amount)) {
            throw new Error('amount는 정수형 타입이어야 합니다.');
        }
        if (Util.isNotTypeArray(Ticket, tickets)) {
            throw new Error('tickets은 Ticket 타입의 배열이어야 합니다.');
        }

        this.amount = amount;
        this.tickets = [...tickets];
    }

    getTicket() {
        return this.tickets.shift();
    }

    minusAmount(amount) {
        if (!Number.isInteger(amount)) {
            throw new Error('amount는 정수형 타입이어야 합니다.');
        }
        this.amount -= amount;
    }

    plusAmount(amount) {
        if (!Number.isInteger(amount)) {
            throw new Error('amount는 정수형 타입이어야 합니다.');
        }
        this.amount += amount;
    }
}