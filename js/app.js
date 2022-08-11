const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('#phrase ul')
const showGame = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
let ol = document.querySelector('ol');
var missed = 0;

const phrases = [
    'on cloud nine',
    'cut the mustard',
    'life is fun',
    'knowledge is power',
    'light it up'
];

// FUNCTIONS

const getRandomPhraseAsArray = (array) => {
    var randomIndex = Math.floor(Math.random()* 5);
    return array[randomIndex];
}

let randomPhr = getRandomPhraseAsArray(phrases);

const addPhraseToDisplay = (array) => {
    function addLetter(char,cls)  {
        let li = document.createElement('li');
        li.textContent = char;
        li.className = cls;
        ul.append(li);
    }
    for (char of array) {
        if (char === ' ') {
            addLetter(char,'space')
        } else {
            addLetter(char,'letter')
        }
    }
}

addPhraseToDisplay(randomPhr);

const checkLetter = (button) => {
    var items = ul.getElementsByTagName("li");
    var match = null;
    for (let i = 0; i < items.lenght; i++) {
        if (button.textContent === items[i]) {
            items[i].className = 'show';
            match = button.textContent;
        }
    }
    return match
}

const checkWin = () => {
    
}

startButton.addEventListener('click', () => {
    showGame.style.display = 'none';
});

var buttons = document.getElementsByTagName('button');

keyboard.addEventListener('click', (e) => {
    var clickedButton = e.target
    var buttonGuess = checkLetter(e.target);
    if (buttonGuess) {
        e.target.className = 'choosen'
    } else if (buttonGuess = null) {
    }
});





