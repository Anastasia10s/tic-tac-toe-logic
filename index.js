const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


let board = [
  ["X", "X", "-"],

  ["X", "-", "X"],

  ["-", "X", "O"]
]

const map = new Map()
map.set('1', { x: 0, y: 0 })
map.set('2', { x: 0, y: 1 })
map.set('3', { x: 0, y: 2 })
map.set('4', { x: 1, y: 0 })
map.set('5', { x: 0, y: 1 })
map.set('6', { x: 0, y: 2 })
map.set('7', { x: 2, y: 0 })
map.set('8', { x: 0, y: 1 })
map.set('9', { x: 0, y: 2 })

let playing = true

const checkBoard = (row) => {
  // We need to loop over this
  if (row[0] !== '-') {
    const rowStringTheSame = row.every(element => element === row[0])
    if (rowStringTheSame) {
      return { won: true, winner: row[0] }
    }
  }
  return { won: false, winner: '-' }
}

const play = () => {
  readline.question("Where do you want to play? ", (spot) => {
    console.log("SPOT", spot)

    // T
    if (!map.get(spot)) {
      console.log("Hey what are you trying to do??")
    } else {
      // Deconstrucrt the object that is returned from map.get
      const { x, y } = map.get(spot)
      //access the row and column to set the value to x
      board[x][y] = 'X'
    }

    // Show the board so I can see if it updated correctly
    console.log(`${board[0]} \n ${board[1]} \n ${board[2]}`);


    if (checkBoard(board[0]).won === true) {
      console.log("Someone won")
    }
    //check for row 0 if x wins
    //output the winner
    //close the readline
    readline.close()

  });
};

play()
