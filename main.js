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

// Useful Variables

var result = null;
var userInput = null;

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
    game.selectedGame('classic');
};

function chooseFighter(event) {
    var userChoices = document.querySelectorAll('input');
    userInput = event.target.value;
    computerPlayer.takeTurn();
    game.play()
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