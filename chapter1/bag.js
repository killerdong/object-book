const Invitation = require('./invitation');
const Ticket = require('./ticket');


module.exports = class {
    constructor(amount, invitation = null) {
        if (!Number.isInteger(amount)) {
            throw new Error('amount는 정수형 타입이어야 합니다.');
        }

        if (invitation && !(invitation instanceof Invitation)) {
            throw new Error('invitation 은 null 이거나 Invitation 클래스의 인스턴스이어야 합니다.');
        }

        this.amount = amount;
        this.invitation = invitation;
        this.ticket = null;
    }

    hasInvitation() {
        return !!this.invitation;
    }

    hasTicket() {
        return !!this.ticket;
    }

    setTicket(ticket) {
        if (!(ticket instanceof Ticket)) {
            throw new Error('ticket 은 Ticket 클래스의 인스턴스이어야 합니다.');
        }

        this.ticket = ticket;
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