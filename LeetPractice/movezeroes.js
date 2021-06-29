// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.
var moveZeroes = function(nums) {
  var length = nums.length
  for(let i = 0; i < length;i++){
    if(nums[i]==0){
      nums.splice(i,1)
      nums.push(0)
     i--
     length--
    }
  }
 console.log(nums)
}

moveZeroes([0,4,2,0,0,2,10,0,12])
