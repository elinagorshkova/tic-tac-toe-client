'use strict'
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const onNewGame = function () {
  event.preventDefault()
  api.newGame()
    .then(ui.newGameSuccess)
    .catch(ui.failure)
}

const onEachMove = function () {
  event.preventDefault()
  api.addMove()
    .then(ui.eachMoveSucess)
    .catch(ui.gameFailure)
}
const onCheckApi = function () {
  event.preventDefault()
  api.checkApi()
    .then(ui.checkApiSuccess)
    .catch(ui.failure)
}

module.exports = {
  onNewGame,
  onCheckApi,
  store,
  onEachMove
}
