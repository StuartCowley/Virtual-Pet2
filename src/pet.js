const MAXIMUM_FITNESS = 10;
const DECREASE_FITNESS = 3;
const INCREASE_FITNESS = 4;

const MINIMUM_HUNGER = 0;
const INCREASE_HUNGER = 5;
const DECREASE_HUNGER = 3;

const INCREASE_AGE = 1

function Pet(name) {
    this.name = name;
    this.age = 0; 
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype = {
    get isAlive () {
   return this.age < 30 && this.hunger < 10 && this.fitness > 0
}
};

Pet.prototype.growUp = function () {
    this.age += INCREASE_AGE;
    this.hunger += INCREASE_HUNGER;
    this.fitness -= DECREASE_FITNESS;
};

Pet.prototype.walk = function () {
    if((this.fitness + 4) <= MAXIMUM_FITNESS) {
    this.fitness += INCREASE_FITNESS;
    }else {
    this.fitness = MAXIMUM_FITNESS;
    }};

Pet.prototype.feed = function () {
    this.hunger = Math.max(MINIMUM_HUNGER, this.hunger - DECREASE_HUNGER);
    }; 

Pet.prototype.checkUp = function () {
    if (this.hunger <= 4 && this.fitness >= 4) {
    return 'I feel great';
    };
    if (this.hunger >= 4 && this.fitness <= 4) {
    return 'I am hungry AND I need a walk'
    } else if(this.hunger >=  5) {
    return 'I need to eat'
    }else if (this.fitness <= 3) {
    return 'I need a walk' 
    }
    };


module.exports = Pet;