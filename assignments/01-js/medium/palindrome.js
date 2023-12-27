/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
    str = str.toLowerCase();
    let s = 0,
        e = str.length - 1;

    while (s < e) {
        let isStartAlphabet = "a" <= str[s] && str[s] <= "z";
        let isEndAlphabet = "a" <= str[e] && str[e] <= "z";
        if (isStartAlphabet && isEndAlphabet) {
            if (str[s] !== str[e]) {
                return false;
            }
            s++;
            e--;
        }
        if (!isStartAlphabet) s++;
        if (!isEndAlphabet) e--;
    }
    return true;
}

module.exports = isPalindrome;
