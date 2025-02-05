`use strict`;
//Write a function filterArray(numbers, value) that takes
// an array of numbers and a value as parameters.

function filterArray(numbers, value) {
  // Create an empty array to hold the matching numbers
  const filteredNumbers = [];

  // If the number is greater than value, add it to the new array
  for (const number of numbers) {
    // If the number is greater than value, add it to the new array
    if (number > value) {
      filteredNumbers.push(number);
    }
  }

  // Return an array of matching numbers
  return filteredNumbers;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]
//Leave this code for review by your mentor.
