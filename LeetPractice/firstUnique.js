// Given a string s, return the first non-repeating character in it and return its index. If it does not exist, return -1
var firstUniqChar = function(s) {
var arr = s.split('')
var result = -1
var map = {}
//first hashmap
arr.forEach((val,i)=>{
if(map[val]){
  map[val]++
} else {
  map[val]=1
}
})

//then run against hash
for(let i = 0;i<arr.length;i++){
  if(map[arr[i]]==1){
    result = i
    break
  }
}


 return result
}


console.log(firstUniqChar('tessccoodde'),2)
