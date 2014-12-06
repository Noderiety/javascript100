var object = {
  value: 42,
  toString() {
    return this.value;
  }
};
var object = {
  value: 42,
  toString:function toString(){
    return this.value;
  }
};

object.value