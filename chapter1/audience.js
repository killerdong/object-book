const Bag = require('./bag');


module.exports = class {
    constructor(bag) {
        if (!(bag instanceof Bag)) {
            throw new Error('bag는 Bag 클래스의 인스턴스이어야 합니다.');
        }
        this.bag = bag;
    }

    getBag() {
        return this.bag;
    }
}