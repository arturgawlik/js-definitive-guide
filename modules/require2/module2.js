const sum = (x, y) => x + y;
const square = (x) => x * x;

module.exports = (data) => data.reduce(sum) / data.length;
