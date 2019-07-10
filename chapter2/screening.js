module.exports = class {
    constructor(movie, sqeuence, whenScreened) {
        this.movie = movie;
        this.sqeuence = sqeuence;
        this.whenScreened = whenScreened;
    }

    getStartTime() {
        return this.whenScreened;
    }

    isSequence(sequence) {
        return this.sequence === sequence;
    }

    getMoiveFee() {
        return this.movie.getFee();
    }

    reserve(customer, audienceCount) {
        return new Reservation(customer, this, calculateFee(audienceCount), audienceCount);
    }
};