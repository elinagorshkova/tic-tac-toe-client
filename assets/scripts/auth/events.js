'use strict'
const getFormFields = require('./../../../lib/get-form-fields') // get data from from user input
const api = require('./api') // link to API call file
const ui = require('./ui') // link to UI file
const store = require('../store')

const onSignUp = function (event) {
  // prevent default action from happening
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make tha api call
  api.signUp(data)
  // handle sucess
    .then(ui.signUpSuccess)
  // handle fail
    .catch(ui.authFailure)
}

const onSignIn = function (event) {
// prevent default action from happening
  event.preventDefault()
  // get form data
  const data = getFormFields(event.target)
  // make tha api call
  api.signIn(data)
  // handle sucess
    .then(ui.signInSuccess)
  // handle fail
    .catch(ui.authFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.authFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
    .then(ui.signOutSuccess)
    .catch(ui.failure)
}

// Shows modal Sign In/Sign Out form
const onShowAuth = function () {
  $('#starting-form').modal('show')
  $('.auth-forms').show()
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
    .catch(ui.gameFailure)
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
  onEachMove,
  onShowAuth
}
