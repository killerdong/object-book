const TicketOffice = require('./ticketOffice');

module.exports = class {
    constructor(ticketOffice) {
        if (!(ticketOffice instanceof TicketOffice)) {
            throw new Error('ticketOffice 는 TicketOffice 클래스의 인스턴스이어야 합니다.');
        }

        this.ticketOffice = ticketOffice;
    }

    getTicketOffice() {
        return this.ticketOffice;
    }
}