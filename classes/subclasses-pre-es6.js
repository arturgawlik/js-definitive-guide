function A() {}
A.prototype.toString = function () {
  console.log("to string from A class");
};

function B() {}

// first we setup interitance
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;

const instance = new B();
instance.toString();

// and then we're adding B methods
B.prototype.toString = function () {
  console.log("to string form B class");
};

instance.toString();
