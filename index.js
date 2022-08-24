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


var counter = 0
var contador = 0
var container = document.querySelector('.container')
container.addEventListener('click', function(event) {
  let box = event.target

  const index = Array.from(container.children).indexOf(box)

  if (box.tagName === 'DIV') {
    if (box.textContent !== 'X' && box.textContent !== '0') {
      box.classList.add('disabled')
      if (counter === 0) {

      box.textContent = 'X'
      counter = 1
      xPlayer.push(index)

      } else {
        box.textContent = '0'
        counter = 0
        oPlayer.push(index)
      }

      contador = contador + 1 
    
    }

    howToWin.forEach(howToWin => {
      const xWin = howToWin.every(state => xPlayer.includes(state))
      const oWin = howToWin.every(state => oPlayer.includes(state))


      if(document.querySelectorAll('.disabled').length === 9) {
        console.log('draw')
      } else {
        if(xWin === true) {
          console.log('Player X is the winner!')
        }

        if (oWin === true) {
          console.log('Congratulations player 0, you are the winner!')
        }
      }
      
    })
  }
  
})

var reset = document.querySelector('.reset-button')
reset.addEventListener('click', function(event) {
  for(let i = 0; i < container.children.length; i++) {
    container.children[i].textContent = ''
  }
  xPlayer = []
  oPlayer = []
})



// Ok, the basic level is working. 