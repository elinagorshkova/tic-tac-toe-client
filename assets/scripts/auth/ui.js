'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#user-message').text('Successful sign up')
  console.log('Signed up successfuly')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.auth-forms').fadeOut()
  $('#user-message').text('Successful sign in')
  console.log('Signed in successfuly', 'user is:', store.user)
}

const changePasswordSuccess = function () {
  $('#user-message').text('Successfully changed password')
  console.log('Password changed')
}

const signOutSuccess = function () {
  console.log('store')
  store.user = null
  $('#user-message').text('Signed out successfully')
  console.log('Signed out')
}

const newGameSuccess = function (data) {
  store.game = data.game
  $('#user-message').text('New Game Created')
  console.log('New Game Created', data)
  console.log(store.game)
  console.log(store.game.cells)
  console.log(store.game.id)
  console.log(store.game.over)
}

const addMoveSuccess = function (data) {
  $('#user-message').text('That seems to be working')
  console.log('Weehaa')
}

const checkApiSuccess = function (data) {
  store.games = data.games
  console.log('Weeeehaa' + data.games)
  console.log('Games played' + data.games.length)
  function gamesWon (game) {
    return game.over === true
  }
  const gamesPlayed = data.games.length / 2
  const wins = data.games.filter(gamesWon)
  $('#check-api').attr('data-content', 'Games played: ' + gamesPlayed + '||' + 'Games won: ' + wins.length)
  $('#check-api').popover('show')
}

const eachMoveSuccess = function (data) {
  console.log()
  $('#user-message').text('Updtated')
}

const failure = function () {
  $('#user-message').text('Error')
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
  checkApiSuccess,
  eachMoveSuccess
}
