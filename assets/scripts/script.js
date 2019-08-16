'use strict'

// Working Code down there
const store = require('./store')
const authEvents = require('./auth/events')
const api = require('./auth/api')
// let moves = store.game.cells
// let moves = [null, null, null, null, null, null, null, null, null]
const players = ['User X', 'User O']
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
  } else {
    whoseTurn = 0
  }
  marker = markers[whoseTurn]
  return marker
}

// Checks if any of the win/lose conditions are met on the board and returns message to user

const winConditions = function (moves, marker) {
  event.preventDefault()
  moves = store.game.cells
  if ((moves[0] === marker && moves[1] === marker && moves[2] === marker) || (moves[3] === marker && moves[4] === marker && moves[5] === marker) || (moves[6] === marker && moves[7] === marker && moves[8] === marker) || (moves[0] === marker && moves[3] === marker && moves[6] === marker) || (moves[1] === marker && moves[4] === marker && moves[7] === marker) || (moves[2] === marker && moves[5] === marker && moves[8] === marker) || (moves[0] === marker && moves[4] === marker && moves[8] === marker) || (moves[6] === marker && moves[4] === marker && moves[2] === marker)) {
    //  if (moves.every(x => x !== null)) {
    console.log(moves)
    $('#user-message').text(players[whoseTurn] + ' wins')
    store.game.over = true
    console.log(store.game.over)
    return true
  } else {
    if (moves.every(x => x !== '')) {
      console.log('draw')
      $('#user-message').text('draw')
      store.game.over = true
      console.log(store.game.over)
      return true
    } else {
      console.log(moves)
      store.game.over = false
      console.log(store.game.over)
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
      $('#user-message').text('Current player is: ' + playersTurn[whoseTurn])
      store.game.over = winConditions(moves, marker)
      api.addMove()
    } else {
      $('#user-message').text('Pick another cell')
    }
  } else {
    $('#user-message').text('Start a new game!')
  }
  return moves
}

module.exports = {
  game,
  newGame,
  onError
}
