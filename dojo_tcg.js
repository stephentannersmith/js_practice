class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.res -= this.power;
            console.log(`Unit resilience changed by ${this.power}`)
        } else {
            throw new Error('Target must be a unit!')
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, mag) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.mag = mag;
    }

    play(target) {
        if (target instanceof Unit) {
                // check type of stat
                if ( this.stat == "resilience" ) {
                    target.res += this.mag;
                    console.log(`Resilience changed by ${this.mag}`)
                }
                else {
                    // increase power of target by mag
                    target.power += this.mag
                    console.log(`Power changed by ${this.mag}`)
                }
            }
        }
    }

const RBN = new Unit ("Red Belt Ninja", 3, 3, 4)
const BBN = new Unit ("Black Belt Ninja", 4, 5, 4)
const Hard = new Effect ("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
const UPR = new Effect ("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
const PP = new Effect ("Pair Programming", 3, "increase target's power by 2", "power", 2)

Hard.play(RBN)
UPR.play(RBN)
PP.play(RBN)
RBN.attack(BBN)