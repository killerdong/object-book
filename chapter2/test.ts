import Movie from "./Movie";
import Money from "./Money";
import Duration from "./Duration";
import AmountDiscountPolicy from "./AmountDiscountPolicy";
import SequenceCondition from "./SequenceCondition";
import PeriodCondition from "./PeriodCondition";

const avatar: Movie = new Movie(
    Money.wons(10000),
    '아바타',
    new Duration(),
    new AmountDiscountPolicy(Money.wons(800)
        , new SequenceCondition(1)
        , new SequenceCondition(10)
        , new PeriodCondition(new Date)
        )
);

