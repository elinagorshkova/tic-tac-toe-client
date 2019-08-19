'use strict'

// Working Code down there
const store = require('./store')
const authEvents = require('./auth/events')
const api = require('./auth/api')
// let moves = store.game.cells
// let moves = [null, null, null, null, null, null, null, null, null]
const players = ['X', 'O']
const playersTurn = ['User O', 'User X']
let whoseTurn = 1
let marker = ''

const onError = function () {
  $('#user-message').text('')
}
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
    $('#game-flow-message').text('X, your turn')
    $('#x').css('color', '#f30067')
    $('#o').css('color', '#444444')
  } else {
    whoseTurn = 0
    $('#game-flow-message').text('O, now your turn')
    $('#o').css('color', '#f30067')
    $('#x').css('color', '#444444')
  }
  marker = markers[whoseTurn]
  return marker
}

// Checks if any of the win/lose conditions are met on the board and returns message to user
const winConditions = function (moves, marker) {
  event.preventDefault()
  // Array of board cells returned from API
  moves = store.game.cells
  // Checks win/draw conditions
  if ((moves[0] === marker && moves[1] === marker && moves[2] === marker) || (moves[3] === marker && moves[4] === marker && moves[5] === marker) || (moves[6] === marker && moves[7] === marker && moves[8] === marker) || (moves[0] === marker && moves[3] === marker && moves[6] === marker) || (moves[1] === marker && moves[4] === marker && moves[7] === marker) || (moves[2] === marker && moves[5] === marker && moves[8] === marker) || (moves[0] === marker && moves[4] === marker && moves[8] === marker) || (moves[6] === marker && moves[4] === marker && moves[2] === marker)) {
    $('#game-flow-message').text(players[whoseTurn] + ' won!')
    // Stores the fact that the game is over to be sent to API
    store.game.over = true
    return true
  } else {
    if (moves.every(x => x !== '')) {
      $('#game-flow-message').text('Draw')
      store.game.over = true
      return true
    } else {
      store.game.over = false
      return false
    }
  }
}

// Function runs any time a user hits a cell.
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
      $('#user-message').text('Current player is: ' + playersTurn[whoseTurn])
      store.game.over = winConditions(moves, marker)
      api.addMove()
    } else {
      $('#user-message').text('The cell has already been taken')
      $('#game-flow-message').text('Nope, pick another one')
    }
  } else {
    $('#user-message').text('Current game is finished. You can start a new game')
  }
  return moves
}

module.exports = {
  game,
  newGame,
  onError
}
