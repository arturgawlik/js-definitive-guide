function partialLeft(f: Function, ...outerArgs) {
  return function (...innerArgs) {
    // Return this function
    let args = [...outerArgs, ...innerArgs]; // Build the argument list
    return f.apply(this, args);
  };
}

// The arguments to this function are passed on the right
function partialRight(f, ...outerArgs) {
  return function (...innerArgs) {
    // Return this function
    let args = [...innerArgs, ...outerArgs]; // Build the argument list
    return f.apply(this, args);
    // Then invoke f with it
  };
}

const asdf = partialRight(console.log, "a", "b", "c");
asdf();
