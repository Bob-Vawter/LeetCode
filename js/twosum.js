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
