const keyboard = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const ul = document.querySelector('#phrase ul')
const showGame = document.getElementById('overlay');
const startButton = document.querySelector('.btn__reset');
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
        li.classList.add(cls);
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
    var items = ul.querySelectorAll('li');
    var match = null;
    for (let i = 0; i < items.length; i++) {
        if (button.textContent == items[i].textContent) {
            items[i].classList.add('show');
            match = button.textContent;
        }
    }
    return match;
}

const checkWin = () => {
    var show = document.getElementsByClassName('show');
    var letter = document.getElementsByClassName('letter');
    var headline = document.querySelector('#overlay .title')
    if (show.length === letter.length) {
        showGame.style.display =  'flex';
        showGame.className = 'win';
        headline.textContent = 'YOU WON!';
    } else if (missed >= 5) {
        showGame.style.display =  'flex';
        showGame.className = 'lose';
        headline.textContent = 'GAME OVER';
    }
}

startButton.addEventListener('click', () => {
    showGame.style.display = 'none';
});


var tries = document.getElementsByTagName('img');

keyboard.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && e.target.className != 'chosen') {
        var clickedButton = e.target;
        clickedButton.classList.add('chosen');
        clickedButton.disabled = true;
        var Guess = checkLetter(clickedButton);
        if (Guess == null) {
            tries[missed].src = 'images/lostHeart.png';
            missed += 1;
        }
    }

    checkWin();
});





