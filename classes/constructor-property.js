function MyCtr() {}
MyCtr.prototype = {
  hi() {
    console.log("hiii");
  },
};

const obj = new MyCtr();

console.log(MyCtr.prototype.constructor);
console.log(obj.constructor);
