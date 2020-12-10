class Card {

}

class Unit extends Card {

    // attacks another unit
    attack(otherUnit) {

    }

}

class Effect extends Card {

    // modifies a unit
    play(someUnit) {

    }

}

const rbn = new Unit("Red Belt Ninja", 3, 3, 4);
const algo1 = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);

algo1.play(rbn);