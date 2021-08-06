var human = new Player('Human');
var computer = new Player('Computer');

var classicFighters = ['scissors', 'paper', 'rock'];

var spicyFighters = ['scissors', 'paper', 'rock', 'alien', 'lizard'];

function classicGame(classicFighters, userInput) {
    
    var computerFighter = computer.takeTurn(classicFighters)
    var userFighter = userInput;
    var result = null;

    if (computerFighter === userFighter) {
        result = '← It\'s a draw →'
    };

    if (computerFighter === 'scissors' && userFighter === 'rock') {
        result = '← You won this round!'
        human.wins ++;
    } else if (computerFighter === 'scissors' && userFighter === 'paper') {
        result = 'The computer won this round →';
        computer.wins ++;
    };
    
    if(computerFighter === 'rock' && userFighter === 'paper') {
        result = '← You won this round!'
        human.wins ++;
    } else if (computerFighter === 'rock' && userFighter === 'scissors') {
        result = 'The computer won this round →';
        computer.wins ++;
    };

    if (computerFighter === 'paper' && userFighter === 'scissors') {
        result = '← You won this round!'
        human.wins ++;
    } else if (computerFighter === 'paper' && userFighter === 'rock') {
        result = 'The computer won this round →';
        computer.wins ++;
    };
}
// A way to keep track of the data for the game board
// A way to keep track of the selected game type
// A way to check the Game’s board data for win conditions
// A way to reset the Game’s board to begin a new game
