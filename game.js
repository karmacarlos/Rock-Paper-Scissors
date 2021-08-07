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

    selectGame(difficulty) {
        this.selectedGame = difficulty;
    };

    increaseDifficulty() {
        if (this.fighters.length === 3) {
            this.fighters.push('alien');
            this.fighters.push('lizard');
        };
    };

    resetDifficulty() {
        if (this.fighters.length === 5) {
            this.fighters.splice(3, 2);
        };
    };

    play(userInput, computerChoice) {
        
        if (computerChoice === userInput) {
            resultMessage = '← It\'s a draw →'
            return resultMessage;
        };
    
        if (computerChoice === 'scissors' && (userInput === 'rock' || userInput === 'alien')) {
            resultMessage = '← You won this round!';
            this.players[0].wins ++;
            return resultMessage;
        } else if (computerChoice === 'scissors' && (userInput === 'paper' || userInput === 'lizard')) {
            resultMessage = 'The computer won this round →';
            this.players[1].wins ++;
            return resultMessage;
        };
        
        if (computerChoice === 'rock' && (userInput === 'paper' || userInput === 'alien')) {
            resultMessage = '← You won this round!';
            this.players[0].wins ++;
            return resultMessage;
        } else if (computerChoice === 'rock' && (userInput === 'scissors' || userInput === 'lizard')) {
            resultMessage = 'The computer won this round →';
            this.players[1].wins ++;
            return resultMessage;
        };
    
        if (computerChoice === 'paper' && (userInput === 'scissors' || userInput === 'lizard')) {
            resultMessage = '← You won this round!';
            this.players[0].wins ++;
            return resultMessage;
        } else if (computerChoice === 'paper' && (userInput === 'rock' || userInput === 'alien')) {
            resultMessage = 'The computer won this round →';
            this.players[1].wins ++;
            return resultMessage;
        };

        if (computerChoice === 'alien' && (userInput === 'paper' || userInput === 'lizard')) {
            resultMessage = '← You won this round!';
            this.players[0].wins ++;
            return resultMessage;
        } else if (computerChoice === 'alien' && (userInput === 'scissors' || userInput === 'rock')) {
            resultMessage = 'The computer won this round →';
            this.players[1].wins ++;
            return resultMessage;
        };

        if (computerChoice === 'lizard' && (userInput === 'rock' || userInput === 'scissors')) {
            resultMessage = '← You won this round!';
            this.players[0].wins ++;
            return resultMessage;
        } else if (computerChoice === 'lizard' && (userInput === 'paper' || userInput === 'alien')) {
            resultMessage = 'The computer won this round →';
            this.players[1].wins ++;
            return resultMessage;
        };
    };

    countdown() {
        var intervalSet = setInterval(timer, 1000);      
        var totalSec = 1;

        function timer() {
            if (totalSec === 0) {
            clearInterval(intervalSet);
            return restartFighters();
            };
            
            totalSec--;
        };
    }; 
    
};




