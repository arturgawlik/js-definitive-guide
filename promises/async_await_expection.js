async function myFn() {
  throw new Error("Error thrown");
}

try {
  await myFn();
} catch (e) {
  console.log("error caught");
}
