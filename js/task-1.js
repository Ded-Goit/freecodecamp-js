`use strict`;
// Write a function slugify(title) that accepts the article title as a parameter title
// title.toLowerCase() – convert the entire title to lowercase.
// .split(" ") – split a string into an array of words (where spaces are separators).
// .join("-") – join words back into a string, separating them with dashes.
function slugify(title) {
  return title.toLowerCase().split(' ').join('-');
}
console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
// Leave this code for review by your mentor.
