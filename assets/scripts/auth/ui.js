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

const failure = function () {
  $('#message').text('Error')
  console.error('Failure')
}

module.exports = {
  failure,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  changePasswordSuccess
}
