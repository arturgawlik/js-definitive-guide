function Klass() {
  this.message = "hello :)";
}

const klass = {
  get getMessage() {
    return this.message;
  },

  sayMessage() {
    console.log(this.message);
  },
};
Klass.prototype = {
  ...Klass.prototype,
  ...klass,
};

const instance = new Klass();
instance.sayMessage();
