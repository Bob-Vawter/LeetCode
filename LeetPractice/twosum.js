// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
var twoSum = function(nums, target) {
    var result = []
    var run = nums.length
    for(let i = 0; i<run;i++){
        var compare = nums.shift()
            if(nums.includes(target-compare)){
                result = [i,nums.indexOf(target-compare)+i+1]
                break
        }
    }
    return result
};
twoSum([1,3,4,5,6,7,8,9],7)

function findTarget(nums,target){
  var map = {}
  for(let i = 0;i<nums.length;i++){
    var compare = target-nums[i]
    if(compare in map){
      return [map[compare],i]
    } else {
      map[nums[i]]=i
    }
  }
}


console.log(findTarget([1,2,3,4,5],9), "[3,4]")
console.log(findTarget([5,6,9],11), "[0,1]")
console.log(findTarget([22,7,100,5],12), "[1,3]")
console.log(findTarget([22,4,3,8,9,7,100,5],122), "[0,6]")
