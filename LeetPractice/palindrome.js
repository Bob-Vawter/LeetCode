// Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.split('').filter(a=>a.match(/[a-z0-9]/))
    console.log(s)
    console.log(s.reverse())
    return s.join('') === s.reverse().join('')
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
