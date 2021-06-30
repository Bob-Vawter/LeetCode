// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

var isValidSudoku = function(board) {

  for(let i = 0;i<9;i++){
    //test rows...done
    if(hasDuplicates(board[i])){
      console.log(board[i])
      return false
    }

    //test columns
    var cols = []
    for(let j = 0;j<9;j++){
      cols.push(board[j][i])
    }
    if(hasDuplicates(cols)){
      console.log(cols)
      return false
    }
  }
  //test each 9 squares
  for(let l=0;l<9;l+=3){

    for(let k=0;k<9;k+=3){
      var square = []
      for(let i=l;i<l+3;i++){
        for(let j = k;j<k+3;j++){
          square.push(board[i][j])
        }
      }
      if(hasDuplicates(square)){
        return false
        // break
      }
    }
  }

  return true
};

function hasDuplicates(array) {
  array = array.filter(a=>a!='.')
  return (new Set(array)).size !== array.length;
}

const board1 =
[["8","3","1",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".",".","8",".",".",".",".","6","."]
,["5",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

const board2 =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7","1",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board1))
console.log(isValidSudoku(board2))
