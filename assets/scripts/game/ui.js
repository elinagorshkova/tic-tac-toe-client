'use strict'

const store = require('../store')

const newGameSuccess = function (data) {
  store.game = data.game
  $('#user-message').text('New Game Created')
  $('#game-flow-message').text('Let`s have some fun!')
  $('#board').show()
  $('#xo').show()
  $('#check-api').show()
}

const checkApiSuccess = function (data) {
  store.games = data.games
  function gamesWon (game) {
    return game.over === true
  }
  const gamesPlayed = data.games.length
  const wins = data.games.filter(gamesWon)
  $('#check-api').attr('data-content', 'Games played/Games won: ' + gamesPlayed + '/' + wins.length)
  $('#check-api').popover('show')
}

const eachMoveSuccess = function (data) {
  $('#user-message').text('Updated')
}

// Universal Error message
const failure = function () {
  $('#user-message').text('Unknown error')
}

module.exports = {
  failure,
  newGameSuccess,
  checkApiSuccess,
  eachMoveSuccess
}
