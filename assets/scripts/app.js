'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./script')
$(() => {
  // Shows Sign Up, Sign In form as soon as the page loads
  $(document).ready(function () {
    $('#starting-form').modal('show')
  })
  // Shows Sign Up/Sign In forms on click
  $('#button-auth').on('click', authEvents.onShowAuth)
  // Line 10-16 hide Change Password and Sign Out buttons until the users logs in
  $(document).ready(function () {
    $('#change-password').hide()
  })
  $(document).ready(function () {
    $('#sign-out').hide()
  })
  // Lines 18-21 call authorization features
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // Creates a new game object in API on click
  $('.new-game').on('click', gameEvents.newGame)
  // Adds token (X or O) to a cell on click
  $('.cell').on('click', gameEvents.game)
  // Tracks the game and rewrites game object in API accordingly
  $('.cell').on('click', authEvents.onEachMove)
  // Returns game data (total games played for a user, games won) from API on click.
  $('#check-api').on('click', authEvents.onCheckApi)
})
