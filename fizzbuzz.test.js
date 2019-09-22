const FizzBuzz = require("./fizzbuzz");

describe("test FizzBuzz", () => {
  test("test 1 expect 1", () => {
    const result = FizzBuzz.say(1);
    expect(result).toEqual(1); // Assert Function
  });
});
