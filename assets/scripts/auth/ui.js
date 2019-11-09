'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#user-message').text('Successful sign up')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  store.user = data.user
  document.getElementById('sign-in').reset()
  $('.auth-forms').fadeOut()
  $('#user-message').text('Successful sign in')
  $('#game-flow-message').text('Press "New Game" to start')
  $('#starting-form').modal('hide')
  $('#button-auth').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#start-over').show()
}

const changePasswordSuccess = function () {
  $('#user-message').text('Successfully changed password')
  document.getElementById('change-password').reset()
}

const signOutSuccess = function () {
  store.user = null
  $('#game-flow-message').text('See you soon!')
  $('#user-message').text('Signed out successfully')
  $('#button-auth').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#board').hide()
  $('#check-api').hide()
  $('#start-over').hide()
  $('#xo').hide()
}

// Error on signing in/signing up
const authFailure = function () {
  $('#user-message').text('Incorrect email and/or password')
  document.getElementById('sign-up').reset()
  document.getElementById('sign-in').reset()
  document.getElementById('change-password').reset()
}

// Universal Error message
const failure = function () {
  $('#user-message').text('Unknown error')
}

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess,
  authFailure
}
