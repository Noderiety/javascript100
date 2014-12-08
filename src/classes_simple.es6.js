class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function Character2(x, y) {
	this.x = x;
	this.y = y;
}

console.log(new Character(1,2))
console.log(new Character2(1,2))
