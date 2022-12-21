// Define arrays
const rowWin = [
    ["O", "O", "O"],
    ["", "", ""],
    ["", "", ""]
]

const colWin = [
    ["", "X", ""],
    ["", "X", ""],
    ["", "X", ""]
]

const diagonalWin = [
    ["", "", "O"],
    ["", "O", ""],
    ["O", "", ""]
]

const diagonalWinInverse = [
    ["X", "", ""],
    ["", "X", ""],
    ["", "", "X"]
]

// evaluatePlay function.
// Within this function, write the code to evaluate weather a winning play has been made or not
// Your program must be able to evaluate all the grids defined above.
// The function should inform the user of which sign has  won and which sign has lost
// You may add additional parameters to assist you

function evaluatePlay(grid){

    //Loop through array
    for (let i = 0; i<grid.length; i++){
       for (let j = 0; j<grid[i].length; j++){
    //Horizontal win
           if (grid[i][0] == grid[i][1] && grid [i][0] == grid[i][2]){
            //Check which character is in index to decide who wins - O wins
            if(grid[i][0] == 'O'){
                return 'O wins\nX loses'
            // X wins if 'X' is in indexes
            } else if(grid[i][0] == 'X'){
                return 'X wins\nO loses'
            }
    //Vertical win
            } else if ( grid[0][1] == grid[1][1] && grid[0][1] == grid[2][1])
            { if(grid[0][1] == 'X') {
            return 'X wins\nO loses'
            }
                else if(grid[0][1] == 'O'){
                    return 'O wins\nX loses'
                }
    //Diagonal win
            } else if(grid[0][2] == grid[1][1] && grid[1][1] == grid[2][0]){
            if(grid[1][1] == 'O') {
                return '0 wins\nX loses'
            }
            else if(grid[1][1] == 'X')console.log('X wins\nO loses')
    //Inverse Diagonal win
            } else if(grid[0][0] == grid[1][1] && grid[1][1] == grid[2][2]){
            if (grid[1][1] == 'X') {
                return 'X wins\nO loses'
            }
                else if(grid[1][1] == 'O'){
                    return 'O wins\nX loses'
                }
            }
        }
   } 

}


console.log(evaluatePlay(rowWin))
console.log(evaluatePlay(colWin))
console.log(evaluatePlay(diagonalWin))
console.log(evaluatePlay(diagonalWinInverse))
