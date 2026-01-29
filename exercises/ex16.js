/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  let result = input;
  const cases = Array.isArray(caze) ? caze : [caze];

  // Helpers
  const capitalize = word => word[0].toUpperCase() + word.slice(1);
  const isVowel = char => "aeiou".includes(char.toLowerCase());

  // 1️⃣ Word-based casing (highest priority)
  if (cases.includes("camel")) {
    const words = result.split(" ");
    result =
      words[0] +
      words
        .slice(1)
        .map(word => capitalize(word))
        .join("");
  }

  if (cases.includes("pascal")) {
    result = result
      .split(" ")
      .map(word => capitalize(word))
      .join("");
  }

  if (cases.includes("snake")) {
    result = result.split(" ").join("_");
  }

  if (cases.includes("kebab")) {
    result = result.split(" ").join("-");
  }

  if (cases.includes("title")) {
    result = result
      .split(" ")
      .map(word => capitalize(word))
      .join(" ");
  }

  // 2️⃣ Letter-based casing
  if (cases.includes("vowel")) {
    result = [...result]
      .map(char => (isVowel(char) ? char.toUpperCase() : char))
      .join("");
  }

  if (cases.includes("consonant")) {
    result = [...result]
      .map(char =>
        /[a-z]/i.test(char) && !isVowel(char)
          ? char.toUpperCase()
          : char
      )
      .join("");
  }

  // 3️⃣ Global casing (lowest priority)
  if (cases.includes("upper")) {
    result = result.toUpperCase();
  }

  if (cases.includes("lower")) {
    result = result.toLowerCase();
  }

  return result;
};




console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
