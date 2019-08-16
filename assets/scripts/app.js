'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./script')
$(() => {
  $(document).ready(function () {
    $('#starting-form').modal('show')
  })
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.new-game').on('click', gameEvents.newGame)
  $('.cell').on('click', gameEvents.game)
  $('.cell').on('click', authEvents.onEachMove)
  $('#check-api').on('click', authEvents.onCheckApi)
})
