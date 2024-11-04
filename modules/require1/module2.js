const sum = (x, y) => x + y;
const square = (x) => x * x;

module.exports.mean = (data) => data.reduce(sum) / data.length;
module.exports.stddev = function (d) {
  let m = exports.mean(d);
  return Math.sqrt(
    d
      .map((x) => x - m)
      .map(square)
      .reduce(sum) /
      (d.length - 1)
  );
};
