class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  attack(character) {
    console.log(`${this.name} attacking ${character.name}`)
  }
}

class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
    this.health_ = 100;
  }

  attack(character) {
    super(character);
    // Can also be written as:
    // super.attack();
  }

  get isAlive() { return this.health_ > 0; }
  get health() { return this.health_; }
  set health(value) {
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}

var myMonster = new Monster(5,1, 'arrrg');

var expect = require('chai').expect;
expect(myMonster.health).to.be.eql(100);
expect(myMonster.isAlive).to.be.eql(true);
expect(myMonster.x).to.be.eql(5);
myMonster.health = 10;
expect(myMonster.health).to.be.eql(10);
expect(myMonster.name).to.be.eql('arrrg');

var myMonsterTwo = new Monster(6,2, 'samuel');
myMonster.attack(myMonsterTwo)