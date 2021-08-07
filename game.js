class Game {
    constructor(humanInstance, computerInstance) {
        this.players = [humanInstance, computerInstance];
        this.selectedGame = null;
        this.gameBoard = { 
            human: humanInstance.wins,
            computer: computerInstance.wins,
        };
        this.fighters = ['scissors', 'paper', 'rock'];
    };

    selectedGame(difficulty) {
        this.selectedGame = difficulty;
    };

    increaseDifficulty() {
        this.fighters.push('alien');
        this.fighters.push('lizard');
    };

    resetDifficulty() {
        this.fighters.splice(3, 2);
    };

    game(userInput, result) {
    
        var computerFighter = this.players[1].takeTurn(this.fighters);
        
        if (computerFighter === userInput) {
            result = '← It\'s a draw →'
            return result;
        };
    
        if (computerFighter === 'scissors' && (userInput === 'rock' || userInput === 'alien')) {
            result = '← You won this round!'
            human.wins ++;
            return result;
        } else if (computerFighter === 'scissors' && (userInput === 'paper' || userInput === 'lizard')) {
            result = 'The computer won this round →';
            computer.wins ++;
            return result;
        };
        
        if(computerFighter === 'rock' && (userInput === 'paper' || userInput === 'alien')) {
            result = '← You won this round!'
            human.wins ++;
            return result;
        } else if (computerFighter === 'rock' && (userInput === 'scissors' || userInput === 'lizard')) {
            result = 'The computer won this round →';
            computer.wins ++;
            return result;
        };
    
        if (computerFighter === 'paper' && (userInput === 'scissors' || userInput === 'lizard')) {
            result = '← You won this round!'
            human.wins ++;
            return result;
        } else if (computerFighter === 'paper' && (userInput === 'rock' || userInput === 'alien')) {
            result = 'The computer won this round →';
            computer.wins ++;
            return result;
        };
    };
};




