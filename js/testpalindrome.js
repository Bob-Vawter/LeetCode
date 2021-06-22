// create a program that takes in a word and tests if a palindrome
// prep
// param
// return
// example
// pseudo code
//learnwithleon work
function testPalindrome (word) {
  return word==word.split('').reverse().join('')
}

console.log(testPalindrome('petep'))
console.log(testPalindrome('racecar'))
console.log(testPalindrome('peter'))
