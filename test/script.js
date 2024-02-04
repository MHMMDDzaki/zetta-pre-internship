/*
Title: Unique Characters

Description:
Write a function named hasUniqueCharacters that takes a string as input and returns true if the string contains all unique characters, and false otherwise. You can assume that the string contains only lowercase alphabets (a-z).

Example:
console.log(hasUniqueCharacters("abcdefg")); // Output: true
console.log(hasUniqueCharacters("hello")); // Output: false
*/

function hasUniqueCharacters(str) {
  let charSet = {};

  for (let char of str) {
    if (charSet[char]) {
      return false;
    }

    charSet[char] = true;
  }
  return true;
}

console.log(hasUniqueCharacters("abcdefg"));
console.log(hasUniqueCharacters("hello"));
