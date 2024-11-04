const class1 = {
  hi() {
    console.log("hello from class1");
  },
};

const class2 = {
  hello() {
    console.log("hii from class2");
  },
};

class1.__proto__ = class2;

function Class1Ctr() {}
Class1Ctr.prototype = class1;

const myObj = new Class1Ctr();

console.log(class2.isPrototypeOf(myObj));
