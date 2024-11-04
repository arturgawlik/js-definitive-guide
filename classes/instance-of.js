const classObj1 = {
  hello() {
    console.log("hello from class");
  },
};

function MyConstructor1() {}
MyConstructor1.prototype = classObj1;

function MyConstructor2() {}
MyConstructor2.prototype = classObj1;

const instance = new MyConstructor1();

console.log(instance instanceof MyConstructor2);
