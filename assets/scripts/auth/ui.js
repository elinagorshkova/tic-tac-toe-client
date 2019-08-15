'use strict'

const store = require('../store')

const signUpSuccess = function () {
  $('#message').text('Successful sign up')
  console.log('Signed up successfuly')
}

const signInSuccess = function (data) {
  store.user = data.user
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
}

const addMoveSuccess = function (data) {
  $('#message').text('That seems to be working')
  console.log('Weehaa')
}

const checkApiSuccess = function (data) {
  store.game = data.game
  console.log('Weeeehaa' + data.game.cells)
  console.log(data.game.over)
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
