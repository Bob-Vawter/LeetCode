// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space

var singleNumber = function(nums) {
   nums.sort((a,b)=>a-b)
   for(n=0;n<=nums.length;n+=2){
     if(nums[n]!=nums[n+1]){
       return nums[n]
     }
   }
};

console.log(singleNumber([1,1,3,3,6,6,7,8,8]))
