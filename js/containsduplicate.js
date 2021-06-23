// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function(nums) {
    //could create a nested for loop comparing each index item to rest of array, would be multiple pass thru very innefiecient for large arrays
    //more efficient to create a hash map
    var map = {}
    for(let i = 0; i<nums.length; i++){
      if(nums[i] in map){
        return true
      } else {
        map[nums[i]]=1
      }
    }
    return false
};

console.log(containsDuplicate([1,2,3,4,4]), true)
console.log(containsDuplicate([1,2,3,4,5]), false)
console.log(containsDuplicate([1,1,3,4,5]), true)
