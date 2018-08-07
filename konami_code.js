const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  let index = 0

function onKeyDownHandler(e) {
  let key = parseInt(e.which || e.detail)

  if (key === code[0]) {
    index++
  }
  if (index === code.length) {
    allert("Hurray!")
  } else {
    index = 0
  }

}

}