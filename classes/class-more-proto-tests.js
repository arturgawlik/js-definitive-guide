function A() {}

A.prototype.helloFromA = function () {
  console.log("helloFromA");
};

function B() {}
B.prototype.helloFromB = function () {
  console.log("helloFromB");
};

// Object.setPrototypeOf(A, B);
B.prototype.__proto__ = A;

const bInstance = new B();
bInstance.helloFromB();
bInstance.helloFromA();
