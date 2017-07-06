$(document).ready(function () {
  $('.cover').click(function (event) {
    $('.popup').fadeOut(300)
    $('.cover').fadeOut(300)
    var videoSource = $('#video').attr('src')
    $('#video').attr('src', videoSource)
  })
})

function popUp () {
  event.preventDefault()
  $('.popup').fadeIn(500)
  $('.cover').fadeTo(500, 0.9)
}
