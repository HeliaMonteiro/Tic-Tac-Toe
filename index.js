let xPlayer = []
let oPlayer = []

const howToWin = [
   [0, 1, 2],
   [3, 4, 5],
   [6, 7, 8],
   [0, 4, 8],
   [2, 4, 6],
   [0, 3, 6],
   [1, 4, 7],
   [2, 5, 8],
]


var turn = 0
var counter = 0
let hasWinner = false
var container = document.querySelector('.container')
container.addEventListener('click', function(event) {
  let box = event.target

  const index = Array.from(container.children).indexOf(box)

  if (box.tagName === 'DIV') {
    if (box.textContent !== 'X' && box.textContent !== '0' && hasWinner === false) {
      box.classList.add('disabled')
      if (turn === 0) {

      box.textContent = 'X'
      turn = 1
      xPlayer.push(index)

      } else {
        box.textContent = '0'
        turn = 0
        oPlayer.push(index)
      }

      counter = counter + 1 

      howToWin.forEach(howToWin => {
        const xWin = howToWin.every(state => xPlayer.includes(state))
        const oWin = howToWin.every(state => oPlayer.includes(state))

          if(xWin === true) {
            hasWinner = true
            var gameResult = document.querySelector('.game-result')
            var winner = document.createElement('p')
            winner.textContent = 'Congrats player X, you are the winner!'
            gameResult.appendChild(winner)
          }
          
  
          if (oWin === true) {
            hasWinner = true
            var gameResult = document.querySelector('.game-result')
            var winner = document.createElement('p')
            winner.textContent = 'Congrats player 0, you are the winner!'
            gameResult.appendChild(winner)
          }

        
      })

      if(document.querySelectorAll('.disabled').length === 9 && hasWinner === false) {
        hasWinner = true
        var gameResult = document.querySelector('.game-result')
          var winner = document.createElement('p')
          winner.textContent = 'Draw!'
          gameResult.appendChild(winner)
      } 
    }

      }
  
})

var reset = document.querySelector('.reset-button')
reset.addEventListener('click', function(event) {
  for(let i = 0; i < container.children.length; i++) {
    container.children[i].textContent = ''
    container.children[i].classList.remove('disabled')
    
  }
  xPlayer = []
  oPlayer = []
  hasWinner = false
  var gameResult = document.querySelector('.game-result p')
  gameResult.remove()

})




// Ok, it is working. 