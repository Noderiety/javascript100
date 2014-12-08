var object = {
  value: 42,
  toString() {
    return this.value;
  }
};
var object2 = {
  value: 42,
  toString: function toString(){
    return this.value;
  }
};

console.log(String(object), String(object2))