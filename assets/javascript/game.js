const words = ['banjo', 'harp', 'guitar', 'drums', 'piano',]

let wins;
let  losses;
let  wordNeededGuess;
let  blanks;
let  guesses;
let  letters;
let  isOver;
let  isTyping;

const init = _ => {
  isTyping = false
  isOver = false
  wordNeededGuess = words[Math.floor(Math.random() * words.length)]
  blanks = wordNeededGuess.split('').map(ltr => '_')
  guesses = 7
  letters = []
  logictarget()
}

const logictarget = _ => {
  document.querySelector('#guesses').textContent = guesses
  document.querySelector('#guess').textContent = blanks.join(' ')
  document.querySelector('#letters').textContent = letters.join(', ')
  document.querySelector('#image').className = `hm${7 - guesses}`
  document.querySelector('#wins').textContent = wins
  document.querySelector('#losses').textContent = losses
}

const gsWrd = _ => {
  if (wordNeededGuess === document.querySelector('#word').value) {
    won()
  } else {
    lost()
  }
}

const won = _ => {
  isOver = true
  wins++
  blanks = wordNeededGuess.split('')
  logictarget()
  document.querySelector('#result').textContent = 'Damn, son! You alive!'
  document.querySelector('#image').className = `victory`
}

const lost = _ => {
  isOver = true
  losses++
  blanks = wordNeededGuess.split('')
  logictarget()
  document.querySelector('#result').textContent = 'Damn! You Dead!'
  document.querySelector('#image').className = `defeat`
}

const checkEnd = _ => wordNeededGuess === blanks.join('') ? won() : guesses <= 0 ? lost() : null

const verNew = letter => letters.indexOf(letter) === -1 ? checkLtr(letter) : null


const checkLtr = letters => {
 
  if (wordNeededGuess.indexOf(letter) !== -1) {
   
    wordNeededGuess.split('').forEach((ltr, index) => {
      if (letter === ltr) {
        
        blanks[index] = letter
      }
    })
    logictarget()
    checkEnd()
  } else {
    letters.push(letter)
    guesses--

    logictarget()
    checkEnd()
  }
}

document.onkeyup = ({ key, keyCode }) => keyCode >= 65 && keyCode <= 90 && !isOver && !isTyping ? verNew(key) : null

document.addEventListener('click', ({ target }) => { target.id === 'word' ? isTyping = true : isTyping = false })

wins = 0
losses = 0
init()
