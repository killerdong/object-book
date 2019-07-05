const TicketOffice = require('./ticketOffice');
const Audience = require('./audience');

module.exports = class {
    constructor(ticketOffice) {
        if (!(ticketOffice instanceof TicketOffice)) {
            throw new Error('ticketOffice 는 TicketOffice 클래스의 인스턴스이어야 합니다.');
        }

        this.ticketOffice = ticketOffice;
    }

    sellTo(audience) {
        if (!(audience instanceof Audience)) {
            throw new Error('audience 는 Audience 클래스의 인스턴스이어야 합니다.');
        }

        this.ticketOffice.sellTicketTo(audience);
    }
}