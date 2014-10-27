var expect = require('chai').expect;

class Character {
  constructor(x, y) {
    console.log('Character ctor')
    this.x = x;
    this.y = y;
  }

  attack(character) {
    console.log(`${this.name} attacking ${character.name}`)
  }
}

class Monster extends Character {
  constructor(x, y, name) {
    console.log('Monster ctor')
    super(x, y);
    this.name = name;
    this.health_ = 100;

    console.log('result: ', this)
  }

  attack(character) {
    super(character);
    // Can also be written as:
    // super.attack();
  }

  get isAlive() {
    console.log('isAlive getter')
    return this.health_ > 0;
  }
  get health() {
    console.log('health getter')
    return this.health_;
  }
  set health(value) {
    console.log('health setter')
    if (value < 0) throw new Error('Health must be non-negative.');
    this.health_ = value;
  }
}

var myMonster = Monster(5,1, 'arrrg');

expect(myMonster.health).to.be.eql(100);
expect(myMonster.isAlive).to.be.eql(true);
expect(myMonster.x).to.be.eql(5);
myMonster.health = 10;
expect(myMonster.health).to.be.eql(10);
expect(myMonster.name).to.be.eql('arrrg');

var myMonsterTwo = new Monster(6,2, 'samuel');
myMonster.attack(myMonsterTwo)