'use strict'
const config = require('../config')
const store = require('../store')

// Creates new game with existing token
const newGame = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Updates the game object data using the currengt game data such as cells taken and 'is game over?'
const addMove = function (data) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      game: {
        cell: {
          index: store.id,
          value: store.marker
        },
        over: store.game.over
      }
    }
  })
}

// Gets total games played by user
const checkApi = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  newGame,
  addMove,
  checkApi
}
