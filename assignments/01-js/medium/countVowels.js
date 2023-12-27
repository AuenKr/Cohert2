/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    const vowels = "aeiou";
    let count = 0;
    str = str.toLowerCase();
    for (i of str) {
        if(i === ".") continue;
        else if (vowels.search(i) !== -1) count++;
    }
    return count;
}

module.exports = countVowels;