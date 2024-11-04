class A {
  toString() {
    console.log("to string from A");
  }
}

class B extends A {
  toString() {
    super.toString();
    console.log("to string form B");
  }
}

const instance = new B();
instance.toString();

function MyClass() {
  const type = ["number"];
  Object.defineProperty(this, "type", {
    enumerable: false,
    configurable: false,
    writable: false,
    value: type,
  });
}

const instance2 = new MyClass();
console.log(instance2.type);
instance2.type = "string";
console.log(instance2.type);
