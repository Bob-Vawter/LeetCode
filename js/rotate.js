// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

var rotate = function(matrix) {
    //transpose diagonlly
    for(let i = 0;i<matrix.length-1;i++){
      for(let j=i+1;j<matrix.length;j++){
        console.log(i + " " + j)
        temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i]=temp
      }
    }


    //reverse laterally
    for(let i = 0;i<matrix.length;i++){
      matrix[i]=matrix[i].reverse()
    }

    return matrix
};

console.log(rotate([[1,2],[3,4]]), [[31],[42]])
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]),[[741],[852],[963]])
console.log(rotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]),[[13951],[141062],[151173,[161284]]])



//document.querySelector('.blah').innerHTML = 'Tested'
