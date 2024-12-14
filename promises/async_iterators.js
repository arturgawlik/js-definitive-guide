const myIterable = {
  [Symbol.asyncIterator]() {
    let i = 0;
    return {
      async next() {
        if (i < 3) {
          return { value: i++, done: false };
        }
        return { done: true };
      },
    };
  },
  [Symbol.iterator]() {
    let i = 100;
    return {
      next() {
        if (i < 103) {
          return { value: i++, done: false };
        }
        return { done: true };
      },
    };
  },
};

async function main() {
  for await (const x of myIterable) {
    console.log(x);
  }

  for (const x of myIterable) {
    console.log(x);
  }
}

main();
