/**
 * 1. Iterable object - returns Iterator object
 * 2. Iterator object - has next() method that returns Iteration result
 * 3. Iteration result - has properties value and done
 */

// impl "hard way"
let iterable = [99];
let iterator = iterable[Symbol.iterator]();
for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value); // result.value == 99
}
