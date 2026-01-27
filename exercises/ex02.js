/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/

const conditionalSum = function (values, condition) {
  return values.reduce((sum, number) => {
    if (condition === "even" && number % 2 === 0) {
      return sum + number;
    }
    if (condition === "odd" && number % 2 !== 0) {
      return sum + number;
    }
    return sum;
  }, 0);
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // 144
console.log(conditionalSum([], "odd")); // 0

module.exports = conditionalSum;



