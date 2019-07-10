"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Theater {
    constructor(ticketSeller) {
        this.ticketSeller = ticketSeller;
    }
    enter(audience) {
        this.ticketSeller.sellTo(audience);
    }
}
exports.default = Theater;
//# sourceMappingURL=Theater.js.map