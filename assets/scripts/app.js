'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./game/events')
const engine = require('./script')
$(() => {
  // Shows Sign Up, Sign In form as soon as the page loads
  pageLoad()
  // Shows Sign Up/Sign In forms on click
  $('#button-auth').on('click', authEvents.onShowAuth)
  // Call authorization features
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // Creates a new game object in API on click
  $('.new-game').on('click', engine.newGame)
  // Adds token (X or O) to a cell on click
  $('.cell').on('click', engine.game)
  // Tracks the game and rewrites game object in API accordingly
  $('.cell').on('click', gameEvents.onEachMove)
  // Returns game data (total games played for a user, games won) from API on click.
  $('#check-api').on('click', gameEvents.onCheckApi)
})

const pageLoad = function () {
  $('#starting-form').modal('show')
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#check-api').hide()
  $('#board').hide()
}
