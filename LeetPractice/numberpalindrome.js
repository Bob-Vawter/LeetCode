//number palindrome
var isPalindrome = function(x) {
    if(x<0){
        return false
    }
    return x.toString().split('').map(a=>+a).reverse().join('')==x
};
