import Movie from "./Movie";
import Money from "./Money";
import Reservation from "./Reservation";
import Customer from "./Customer";

export default class Screening {
    moive: Movie;
    sequence: number;
    whenScreened: Date;

    constructor(movie: Movie, sequence: number, whenScreened: Date) {
        this.moive = movie;
        this.sequence = sequence;
        this.whenScreened = whenScreened;
    }

    getStartTime(): Date {
        return this.whenScreened;
    }

    isSequence(sequence: number): boolean {
        return this.sequence === sequence;
    }

    getMovieFee(): Money {
        return this.moive.getFee();
    }

    reserve(customer: Customer, audienceCount: number): Reservation {
        return new Reservation(customer, this, this.calculateFee(audienceCount), audienceCount);
    }

    private calculateFee(audienceCount: number) {
        return this.moive.calculateMovieFee(this).times(audienceCount);
    }
}