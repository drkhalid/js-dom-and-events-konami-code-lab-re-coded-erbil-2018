const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  let index = 0
  let myEvent = document.body
  
myEvent.addEventListener('keydown', function onKeyDownHandler(e) {
  
  let key = parseInt(e.which || e.detail)

  if (key === code[0]) {
    index++
  }
  if (index === code.length) {
    allert("Hurray!")
  } else {
    index = 0
  }

})
}