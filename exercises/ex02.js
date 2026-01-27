/*
We'll be adding only the numbers in the array which match the given condition.

Instruction
Create a function named conditionalSum that will be given an array of numbers and a condition, in this case odd or even. Given this condition, add up only the values which match that condition. If no values match the condition, return 0.

*/

const conditionalSum = function (values, condition) {
  let sum = 0;

  for (let number of values) {
    if (condition === "even" && number % 2 === 0) {
      sum += number;
    } else if (condition === "odd" && number % 2 !== 0) {
      sum += number;
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even")); 
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); 
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); 
console.log(conditionalSum([], "odd")); 

module.exports = conditionalSum;



