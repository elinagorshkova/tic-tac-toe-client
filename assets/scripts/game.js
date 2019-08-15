'use strict'

const play = function (event) {
  const id = $(this).attr('id')
  $('#' + id).text('X')
}

module.exports = {
  play
}
