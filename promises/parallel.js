// Promise.all() - waits for all promises to resolve, and then resolves with an array of their results
// Promise.allSettled() -

console.log("1");
const p1 = new Promise((resolve, reject) => {
  resolve();
  console.log("2");
});
p1.then(() => {
  console.log("5");
});
console.log("3");
console.log("4");
