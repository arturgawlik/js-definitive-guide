function MyFunctionConstructor() {}
MyFunctionConstructor.prototype.hello = function () {
  console.log("helooo");
};

class MyClassConstrucor {
  fromClassProperty = "hello";

  myMethod = () => {
    console.log(this.fromClassProperty);
    console.log("hellooo from my method");
  };
}
MyClassConstrucor.prototype.fromPrototypeSetProperty = "hiii";

const asdf = new MyClassConstrucor();
asdf.myMethod();
