'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successful sign up')
  console.log('Signed up successfuly')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.auth-forms').fadeOut()
  $('#message').text('Successful sign in')
  console.log('Signed in successfuly', 'user is:', store.user)
}

const changePasswordSuccess = function () {
  $('#message').text('Successfully changed password')
  console.log('Password changed')
}

const signOutSuccess = function () {
  console.log('store')
  store.user = null
  $('#message').text('Signed out successfully')
  console.log('Signed out')
}

const newGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('New Game Created')
  console.log('New Game Created', data)
  console.log(store.game)
  console.log(store.game.cells)
  console.log(store.game.id)
  console.log(store.game.over)
}

const addMoveSuccess = function (data) {
  $('#message').text('That seems to be working')
  console.log('Weehaa')
}

const checkApiSuccess = function (data) {
  store.games = data.games
  console.log('Weeeehaa' + data.games)
  console.log('Games played' + data.games.length)
  function gamesWon (game) {
    return game.over === true
  }
  const wins = data.games.filter(gamesWon)
  console.log('Games won' + wins.length)
}

const failure = function () {
  $('#message').text('Error')
  console.error('Failure')
}

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  newGameSuccess,
  addMoveSuccess,
  checkApiSuccess
}
