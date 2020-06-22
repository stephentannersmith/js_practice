class Ninja {
    constructor(name, health = 100, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(`${this.name}`)
    }

    showStats() {
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }

    drinkSake() {
        this.health += 10;
    }

}

class Sensei extends Ninja {
    constructor(name) {
        super()
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const ninja1 = new Ninja("Tanner")
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei("Master Splinter")
superSensei.speakWisdom();
superSensei.showStats();