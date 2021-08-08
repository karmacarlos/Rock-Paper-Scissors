// DOM Elements

var humanWins = document.getElementById('humanWins');
var computerWins = document.getElementById('computerWins');
var choosePrompt = document.getElementById('promptMessage');
var classicFighters = document.getElementById('fightersClassic');
var spicyFighters = document.getElementById('fightersSpicy');
var difficultyButtonsSection = document.getElementById('difficultyButtons');
var classicButton = document.getElementById('classicGame');
var spicyButton = document.getElementById('spicyGame');
var startButton = document.getElementById('startButton');
var fightButton = document.getElementById('fightButton');
var result = document.getElementById('result');
var changeGameSection = document.getElementById('changeGameSection');
var changeGameButton = document.getElementById('changeGame');
var centralConsole = document.getElementById('centralConsole');
var scissors = document.getElementById('scissors');
var paper = document.getElementById('paper');
var rock = document.getElementById('rock');
var inputs = document.querySelectorAll('input');

// Variables

var resultMessage = null;
var userInput = null;
var computerChoice = null;
var userChoices = null;
var computerDisplayChoice = null;

// Object Instances 

var humanPlayer = new Player('human');
var computerPlayer = new Player('computer');

var game = new Game(humanPlayer, computerPlayer);

displayWins();

// Event Listeners 

classicButton.addEventListener('click', playClassicGame);
centralConsole.addEventListener('click', chooseFighter);
changeGameButton.addEventListener('click', changeDifficulty);
spicyButton.addEventListener('click', playSpicyGame);

// Event Handlers

function playClassicGame() {
    modifyElementText(choosePrompt, 'Choose your Fighter');
    show(classicFighters);
    hide(difficultyButtonsSection);
    show(changeGameSection);
    game.selectGame('classic');
};

function chooseFighter(event) {
    event.preventDefault();
    if (event.target.id === 'scissors' || event.target.id === 'paper' || event.target.id === 'rock' || event.target.id === 'alien' || event.target.id === 'lizard') {
        userInput = event.target.id;
        computerChoice = computerPlayer.takeTurn(game.fighters);
        game.play(userInput, computerChoice);
        getComputerElement();
        displayResult();
        game.countdown();
        displayWins();
    };
};

function changeDifficulty(event) {
    event.preventDefault();
    show(difficultyButtonsSection);
    modifyElementText(choosePrompt, 'Choose Difficulty Level');
    hide(classicFighters);
    hide(result);
    hide(changeGameSection);
    hide(spicyFighters);
    game.resetDifficulty();
};

function playSpicyGame() {
    modifyElementText(choosePrompt, 'Choose your Fighter');
    show(classicFighters);
    show(spicyFighters);
    hide(difficultyButtonsSection);
    show(changeGameSection);
    game.selectGame('spicy');
    game.increaseDifficulty();
}
// Helper Functions

function hide(element) {
    element.classList.add('hidden');
};

function show(element) {
    element.classList.remove('hidden');
};

function modifyElementText(element, text) {
    element.innerText = text;
};

// function markSelected(element, className) {
//     element.classList.add(className);
// };

function getComputerElement() {
    for(var i =0; i < inputs.length; i++) {
        if(inputs[i].id === computerChoice) {
         computerDisplayChoice = inputs[i];
        };
     };
};

function displayResult() {
        hide(spicyFighters);
        classicFighters.innerHTML = `<input class="fighter" id="${userInput}" type="image" src=${event.target.src} value=${userInput}>
         <input class="fighter" id="${computerChoice}" type="image" src=${computerDisplayChoice.src} value=${computerChoice}>`;
         show(result);
        result.innerText = resultMessage;
};

function restartFighters() {

    hide(result);
    if (game.fighters.length === 3) {
        classicFighters.innerHTML = `<div class="fighters" id="fightersClassic">
        <input class="fighter" id="scissors" type="image" src="./assets/black-and-white-scissors.png" value="scissors">
        <input class="fighter" id="rock" type="image" src="./assets/black-and-white-rocks.png" value="rock">
        <input class="fighter" id="paper" type="image" src="./assets/black-and-white-paper.png" value="paper">
        </div>`
    } else if (game.fighters.length === 5) {
        classicFighters.innerHTML = `<div class="fighters" id="fightersClassic">
        <input class="fighter" id="scissors" type="image" src="./assets/black-and-white-scissors.png" value="scissors">
        <input class="fighter" id="rock" type="image" src="./assets/black-and-white-rocks.png" value="rock">
        <input class="fighter" id="paper" type="image" src="./assets/black-and-white-paper.png" value="paper">
        </div>`;
        show(spicyFighters);
    };
};

function displayWins() {
    if (game.retrieveHumanWins() > 0) {
        humanWins.innerText = `${game.retrieveHumanWins()} Wins`;
    };
    if (game.retrieveComputerWins()) {
        computerWins.innerText = `${game.retrieveComputerWins()} Wins`;
    };
};