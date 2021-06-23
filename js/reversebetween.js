// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
//reverse works for array not linked list

var reverseBetween = function(head, left, right) {
   var mid = head.slice(left-1,right).reverse()
   var tail = head.slice(right)
   // console.log(mid)
   // console.log(tail)
   return head.slice(0,left-1).concat(mid).concat(tail)
};

console.log(reverseBetween([1,2,3,4,5,6,7,8],2,5), '[1,5,4,3,2,6,7,8]')
console.log(reverseBetween([1,2,3,4,5,6,7,8],1,1), '[1,5,4,3,2,6,7,8]')
console.log(reverseBetween([1,2,3,4,5,6,7,8],1,5), '[1,5,4,3,2,6,7,8]')
console.log(reverseBetween([1,2,3,4,5,6,7,8],3,8), '[1,5,4,3,2,6,7,8]')
