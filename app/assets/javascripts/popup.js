var counter = 0

function popUp () {
  event.preventDefault()

  if (counter % 2 === 0) {
    $('.about').fadeIn(500)
  } else {
    $('.about').fadeOut(500)
  }

  counter += 1
}
