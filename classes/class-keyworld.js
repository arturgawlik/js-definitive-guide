function A() {}

A.prototype.foo = function () {
  console.log("Baaar");
};

class B extends A {
  hii() {
    console.log("hellooo");
  }
}
B.prototype.hello = function () {
  console.log("helloooo");
};

const instance = new B();

let C = class extends A {
  xdd() {
    console.log(":)");
  }
};

console.log(C);
