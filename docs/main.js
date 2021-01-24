const PLAYER_NAMES = ['alice', 'john', 'david']

// converts player names into an object mapping player name to 0
const playerScores = Object.assign(...PLAYER_NAMES.map(name => ({ [name]: 0 })))

const playerCardElems = [...document.getElementsByClassName('player-card')]
/** @type {number|null} */
let selectedPlayerIndex = null

const addBtn = document.getElementById('add-btn')
const input = document.getElementById('input-score')

playerCardElems.forEach(playerCardElem => playerCardElem.addEventListener('click', e => {
  e.stopPropagation()
  selectedPlayerIndex = PLAYER_NAMES.indexOf(playerCardElem.id)

  playerCardElems.forEach(cardElem => cardElem.classList.remove('active'))
  playerCardElems[selectedPlayerIndex].classList.add('active')
}))

/**
 * Apply the infomation in playerScores to the GUI
 */
const updateCardScores = () => playerCardElems.forEach(playerCardElem => {
  playerCardElem.querySelector('.score').innerText = playerScores[playerCardElem.id]
})

addBtn.addEventListener('click', e => {
  e.stopPropagation()
  // input validation
  if (input.value.trim() === '') {
    window.alert('Please input some number')
    return
  }
  const inputValue = parseInt(input.value)
  if (selectedPlayerIndex !== null) {
    playerScores[PLAYER_NAMES[selectedPlayerIndex]] += inputValue
    updateCardScores()
  } else {
    window.alert('Select a name first.')
  }
})

document.body.addEventListener('click', () => {
  playerCardElems.forEach(card => card.classList.remove('active'))
  selectedPlayerIndex = null
})

input.addEventListener('click', e => {
  e.stopPropagation()
})
