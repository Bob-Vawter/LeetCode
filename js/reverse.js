// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
var reverse = function(x) {
    var neg = x<0
    if(neg){
      x*=-1
    }
    var result = +x.toString().split('').reverse().join('')
    if(result>=(2**31)-1||result<=(-2)**31){
      return 0
    }
  return neg?-1*result:result
};
console.log(reverse(123), 321)
console.log(reverse(123456), 654321)
console.log(reverse(-123), -321)
console.log(reverse(0), 0)


//document.querySelector('.blah').innerHTML = 'Tested'
