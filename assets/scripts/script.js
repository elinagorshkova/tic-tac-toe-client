'use strict'

// Working Code down there
// win conditions
 /* const wins = [
  ['X', 'X', 'X', null, null, null, null, null, null],
  [null, null, null, 'X', 'X', 'X', null, null, null],
  [null, null, null, null, null, null, 'X', 'X', 'X'],
  ['X', null, null, 'X', null, null, 'X', null, null],
  ['X', null, null, null, 'X', null, null, null, 'X'],
  [null, null, 'X', null, null, 'X', null, null, 'X'],
  ['X', null, null, null, 'X', null, null, null, 'X'],
  [null, null, 'X', null, 'X', null, 'X', null, null]
]

const losses = [
  ['O', 'O', 'O', null, null, null, null, null, null],
  [null, null, null, 'O', 'O', 'O', null, null, null],
  [null, null, null, null, null, null, 'O', 'O', 'O'],
  ['O', null, null, 'O', null, null, 'O', null, null],
  ['O', null, null, null, 'O', null, null, null, 'O'],
  [null, null, 'O', null, null, 'O', null, null, 'O'],
  ['O', null, null, null, 'O', null, null, null, 'O'],
  [null, null, 'O', null, 'O', null, 'O', null, null]
] */

let moves = [null, null, null, null, null, null, null, null, null]

const players = []
players[0] = 'User'
players[1] = 'Computer'
let whoseTurn = 1

const togglePlayer = function () {
  const markers = ['X', 'O']
  let marker = ''
  if (whoseTurn === 0) {
    whoseTurn = 1
  } else {
    whoseTurn = 0
  }
  marker = markers[whoseTurn]
  return marker
}
const winConditions = function (moves, marker) {
  if ((moves[0] === marker && moves[1] === marker && moves[2] === marker) || (moves[3] === marker && moves[4] === marker && moves[5] === marker) || (moves[6] === marker && moves[7] === marker && moves[8] === marker) || (moves[0] === marker && moves[3] === marker && moves[6] === marker) || (moves[1] === marker && moves[4] === marker && moves[7] === marker) || (moves[2] === marker && moves[5] === marker && moves[8] === marker) || (moves[0] === marker && moves[4] === marker && moves[8] === marker) || (moves[6] === marker && moves[4] === marker && moves[2] === marker)) {
    console.log(marker + ' won')
  }
}

const game = function (event) {
  const id = $(this).attr('id')
  const cellTaken = $('#' + id).text()
  const marker = togglePlayer()
  if (cellTaken !== 'X' && cellTaken !== 'O') {
    moves[id] = marker
    $('#' + id).text(marker)
  }
  winConditions(moves, marker)
  console.log(id)
  console.log(cellTaken)
  console.log(moves)
}

const newGame = function () {
  moves = [null, null, null, null, null, null, null, null, null]
  console.log(moves)
}

// code to check win conditions
module.exports = {
  game,
  newGame
}
