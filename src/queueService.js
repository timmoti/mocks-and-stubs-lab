const math = require("mathjs");

const generateQueue = () => {
  const randomInteger = math.randomInt(1, 10);
  const output = Array(randomInteger)
    .fill()
    .map(number => math.randomInt(-20, 50));

  return output;
};

module.exports = generateQueue;
