'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#user-message').text('Successful sign up')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  store.user = data.user
  $('.auth-forms').fadeOut()
  $('#user-message').text('Successful sign in')
  // console.log('Signed in successfuly', 'user is:', store.user)
  document.getElementById('sign-in').reset()
  $('#game-flow-message').text('Press "New Game" to start')
  $('#starting-form').modal('hide')
  $('#button-auth').hide()
  $('#change-password').show()
  $('#sign-out').show()
}

const changePasswordSuccess = function () {
  $('#user-message').text('Successfully changed password')
}

const signOutSuccess = function () {
  store.user = null
  $('#game-flow-message').text('See you soon!')
  $('#user-message').text('Signed out successfully')
  $('#button-auth').show()
  $('#change-password').hide()
  $('#sign-out').hide()
}

const newGameSuccess = function (data) {
  store.game = data.game
  $('#user-message').text('New Game Created')
  $('#game-flow-message').text('Let`s have some fun!')
  // console.log('New Game Created', data)
}

const checkApiSuccess = function (data) {
  store.games = data.games
  function gamesWon (game) {
    return game.over === true
  }
  const gamesPlayed = data.games.length / 2
  const wins = data.games.filter(gamesWon)
  $('#check-api').attr('data-content', 'Games played: ' + gamesPlayed + '||' + 'Games won: ' + wins.length)
  $('#check-api').popover('show')
}

const eachMoveSuccess = function (data) {
  console.log('Api updated')
  $('#user-message').text('Updated')
}
const authFailure = function () {
  $('#user-message').text('Incorrect email and/or password')
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
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
  checkApiSuccess,
  eachMoveSuccess,
  authFailure
}
