// Given an array, rotate the array to the right by k steps, where k is non-negative.
var rotate = function(nums, k) {
  k = nums.length-k%nums.length
  var head = nums.slice(k)
  var tail = nums.slice(0,k)
  var rot = head.concat(tail)
  nums.forEach((val,i)=>{
    nums[i]=rot[i]
  })
  return nums
};

console.log(rotate([1,2,3,4],1),[4,1,2,3])
console.log(rotate([1,2,3,9],2),[3,9,1,2])
console.log(rotate([9,5,9,9],3),[5,9,9,9])
console.log(rotate([9,5,9,9],4),[9,5,9,9])
