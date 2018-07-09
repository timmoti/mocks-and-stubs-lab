const generateQueue = require("../src/queueService");
jest.mock("mathjs", () => {
  return {
    randomInt: () => 10
  };
});

test("should pass", () => {
  expect(generateQueue()).toHaveLength(10);
});
