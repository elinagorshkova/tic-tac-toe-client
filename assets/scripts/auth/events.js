'use strict'
const getFormFields = require('./../../../lib/get-form-fields') // get data from from user input
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const onSignUp = function (event) {
  // prevent default action from happening
  event.preventDefault()
  console.log('submitted sign-up')
  // get form data
  const data = getFormFields(event.target)
  console.log('sign up is ', data)
  // make tha api call
  api.signUp(data)
  // handle sucess
    .then(ui.signUpSuccess)
  // handle fail
    .catch(ui.failure)
}

const onSignIn = function (event) {
// prevent default action from happening
  event.preventDefault()
  console.log('submitted sign-in')
  // get form data
  const data = getFormFields(event.target)
  console.log('sign in is ', data)
  // make tha api call
  api.signIn(data)
  // handle sucess
    .then(ui.signInSuccess)
  // handle fail
    .catch(ui.failure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target) // {passwords: {old: 123}, {new: 234}}
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.failure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

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
    .catch(ui.failure)
}
const onCheckApi = function () {
  event.preventDefault()
  api.checkApi()
    .then(ui.checkApiSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onNewGame,
  onCheckApi,
  store,
  onEachMove
}
