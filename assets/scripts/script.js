'use strict'

// Working Code down there
const store = require('./store')
const authEvents = require('./auth/events')
const api = require('./auth/api')
// let moves = store.game.cells
// let moves = [null, null, null, null, null, null, null, null, null]
let over = false
const players = ['User', 'Computer']
let whoseTurn = 1

// Clears the board when user clicks 'New Game' button
const newGame = function () {
  event.preventDefault()
  authEvents.onNewGame(event)
}

// Switches X and O
const togglePlayer = function () {
  event.preventDefault()
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

// Checks if any of the win/lose conditions are met on the board and returns message to user
const winConditions = function (moves, marker) {
  event.preventDefault()
  if ((moves[0] === marker && moves[1] === marker && moves[2] === marker) || (moves[3] === marker && moves[4] === marker && moves[5] === marker) || (moves[6] === marker && moves[7] === marker && moves[8] === marker) || (moves[0] === marker && moves[3] === marker && moves[6] === marker) || (moves[1] === marker && moves[4] === marker && moves[7] === marker) || (moves[2] === marker && moves[5] === marker && moves[8] === marker) || (moves[0] === marker && moves[4] === marker && moves[8] === marker) || (moves[6] === marker && moves[4] === marker && moves[2] === marker)) {
    console.log(moves)
    window.alert(players[whoseTurn] + ' wins')
    store.over = true
    return true
  } else {
    console.log(moves)
    store.over = false
    return false
  }
}

// working code
/* const game = function (event) {
  const id = $(this).attr('id')
  const cellTaken = $('#' + id).text()
  const marker = togglePlayer()
  if (cellTaken !== 'X' && cellTaken !== 'O' && over !== true) {
    moves[id] = marker
    $('#' + id).text(marker)
    $('#currentPlayer').text(players[whoseTurn])
    over = winConditions(moves, marker)
    console.log(id)
    console.log(cellTaken)
    console.log(moves)
  } else {
    console.log('stop')
  }
  return moves
}
*/
const game = function (event) {
  event.preventDefault()
  const moves = store.game.cells
  const id = $(this).attr('id')
  store.id = id
  const cellTaken = $('#' + id).text()
  let marker = 'O'
  if (over !== true) {
    marker = togglePlayer()
    if (cellTaken !== 'X' && cellTaken !== 'O') {
      moves[id] = marker
      store.marker = marker
      $('#' + id).text(marker)
      $('#currentPlayer').text(players[marker])
      over = winConditions(moves, marker)
      api.addMove()
    } else {
      window.alert('Pick another cell')
    }
  } else {
    window.alert('Game over')
  }
  return moves
}

module.exports = {
  game,
  newGame
}
