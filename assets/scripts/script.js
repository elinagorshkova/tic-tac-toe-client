'use strict'

// Working Code down there
const store = require('./store')
const authEvents = require('./auth/events')
const api = require('./auth/api')
// let moves = store.game.cells
// let moves = [null, null, null, null, null, null, null, null, null]
const players = ['User X', 'User O']
let whoseTurn = 1
let marker = ''

// Clears the board and the board JS when user clicks 'New Game' button
const newGame = function (event) {
  event.preventDefault()
  authEvents.onNewGame(event)
  const moves = [null, null, null, null, null, null, null, null, null]
  for (let i = 0; i < moves.length; i++) {
    $('#' + i).text('')
  }
  whoseTurn = 1
}

// Switches X and O
const togglePlayer = function () {
  event.preventDefault()
  const markers = ['X', 'O']
  if (whoseTurn === 0) {
    whoseTurn = 1
  } else {
    whoseTurn = 0
  }
  marker = markers[whoseTurn]
  return marker
}

// Checks if any of the win/lose conditions are met on the board and returns message to user
// working code
/* const winConditions = function (moves, marker) {
  event.preventDefault()
  moves = store.game.cells
  if ((moves[0] === marker && moves[1] === marker && moves[2] === marker) || (moves[3] === marker && moves[4] === marker && moves[5] === marker) || (moves[6] === marker && moves[7] === marker && moves[8] === marker) || (moves[0] === marker && moves[3] === marker && moves[6] === marker) || (moves[1] === marker && moves[4] === marker && moves[7] === marker) || (moves[2] === marker && moves[5] === marker && moves[8] === marker) || (moves[0] === marker && moves[4] === marker && moves[8] === marker) || (moves[6] === marker && moves[4] === marker && moves[2] === marker)) {
    console.log(moves)
    $('#message').text(players[whoseTurn] + ' wins')
    window.alert(players[whoseTurn] + ' wins')
    store.over = true
    return true
  } else {
    console.log(moves)
    store.over = false
    return false
  }
} */
const winConditions = function (moves, marker) {
  event.preventDefault()
  moves = store.game.cells
  if ((moves[0] === marker && moves[1] === marker && moves[2] === marker) || (moves[3] === marker && moves[4] === marker && moves[5] === marker) || (moves[6] === marker && moves[7] === marker && moves[8] === marker) || (moves[0] === marker && moves[3] === marker && moves[6] === marker) || (moves[1] === marker && moves[4] === marker && moves[7] === marker) || (moves[2] === marker && moves[5] === marker && moves[8] === marker) || (moves[0] === marker && moves[4] === marker && moves[8] === marker) || (moves[6] === marker && moves[4] === marker && moves[2] === marker)) {
    //  if (moves.every(x => x !== null)) {
    console.log(moves)
    $('#message').text(players[whoseTurn] + ' wins')
    window.alert(players[whoseTurn] + ' wins')
    store.over = true
    return true
  } else {
    if (moves.every(x => x !== '')) {
      console.log('draw')
      $('#message').text('draw')
      store.over = true
      return true
    } else {
      console.log(moves)
      store.over = false
      return false
    }
  }
}

const game = function (event) {
  event.preventDefault()
  const moves = store.game.cells
  const id = $(this).attr('id')
  store.id = id
  const cellTaken = $('#' + id).text()
  if (store.game.over !== true) {
    if (cellTaken !== 'X' && cellTaken !== 'O') {
      marker = togglePlayer()
      moves[id] = marker
      store.marker = marker
      $('#' + id).text(marker)
      $('#currentPlayer').text(players[marker])
      store.game.over = winConditions(moves, marker)
      api.addMove()
    } else {
      window.alert('Pick another cell')
    }
  } else {
    $('#message').text('Game is over')
    window.alert('Game over')
  }
  return moves
}

module.exports = {
  game,
  newGame
}
