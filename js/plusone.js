// Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
//
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
//
// You may assume the integer does not contain any leading zero, except the number 0 itself.

var plusOne = function(digits) {
  digits = digits.reverse()
  for(let i = 0; i<digits.length;i++){
    if(digits[i]<9){
      digits[i]+=1
      break
    } else if (i==digits.length-1){
      digits[i]=0
      digits.push(1)
      break
    } else{
      digits[i]=0
    }
  }
  return digits.reverse()
};
