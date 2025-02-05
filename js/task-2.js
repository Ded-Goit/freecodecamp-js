`use strict`;
// Write a function called makeArray that takes three parameters:
// firstArray (array), secondArray (array), and maxLength (number)
function makeArray(firstArray, secondArray, maxLength) {
  const newArray = [...firstArray, ...secondArray];
  // Combine two arrays into one
  return newArray.length > maxLength ? newArray.slice(0, maxLength) : newArray;
  // If the length of the new array is greater than maxLength,
  //  return a copy of it with a limited length
}
console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []
// Leave this code for review by your mentor.
