// DOM Elements

var humanWins = document.getElementById('humanWins');
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

// Event Listeners 

classicButton.addEventListener('click', playClassicGame);
centralConsole.addEventListener('click', chooseFighter);

// Event Handlers

function playClassicGame() {
    hide(spicyButton);
    modifyElementText(choosePrompt, 'Choose your fighter:')
    show(classicFighters);
    hide(difficultyButtonsSection);
    show(changeGameSection);
    game.selectGame('classic');
};

function chooseFighter(event) {
    event.preventDefault();
    if (event.target.id === 'scissors' || event.target.id === 'paper' || event.target.id === 'rock') {
        userInput = event.target.id;
        computerChoice = computerPlayer.takeTurn(game.fighters);
        game.play(userInput, computerChoice);
        getComputerElement();
        displayResult();
        game.countdown();
    };
};

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

function markSelected(element, className) {
    element.classList.add(className);
};

function changeImg(element, source) {
    element.src = source;
};

function getComputerElement() {
    for(var i =0; i < inputs.length; i++) {
        if(inputs[i].id === computerChoice) {
         computerDisplayChoice = inputs[i];
        };
     };
};

function displayResult() {
    classicFighters.innerHTML = `<input class="fighter" id="${userInput}" type="image" src=${event.target.src} value=${userInput}>
         <input class="fighter" id="${computerChoice}" type="image" src=${computerDisplayChoice.src} value=${computerChoice}>`;
         show(result);
        result.innerText = resultMessage;
};

function offInputs() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].checked = true;
    };
};

function restartFighters() {

    hide(result);

    classicFighters.innerHTML = `<div class="fighters" id="fightersClassic">
    <input class="fighter" id="scissors" type="image" src="./assets/black-and-white-scissors.png" value="scissors">
    <input class="fighter" id="rock" type="image" src="./assets/black-and-white-rocks.png" value="rock">
    <input class="fighter" id="paper" type="image" src="./assets/black-and-white-paper.png" value="paper">
    </div>`

};