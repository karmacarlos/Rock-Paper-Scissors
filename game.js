class Game {
    constructor(humanInstance, computerInstance) {
        this.players = [humanInstance, computerInstance];
        this.selectedGame = null;
        this.fighters = ['scissors', 'paper', 'rock'];
        this.rules = {
            rock:['scissors', 'lizard'],
            paper:['rock', 'alien'],
            scissors:['paper', 'lizard'],
            lizard:['paper', 'alien'],
            alien:['scissor', 'rock'],
        };
    };

    play(userInput, computerChoice) {
        if (computerChoice === userInput) {
            resultMessage = '← It\'s a draw →'
            return resultMessage;
        } else if (this.rules[computerChoice].includes(userInput)) {
            resultMessage = 'The computer won this round →';
            this.players[1].wins ++;
            localStorage.setItem(`${this.players[1].player}Wins`, this.players[1].wins);
            return resultMessage;
        } else {
            resultMessage = '← You won this round!';
            this.players[0].wins ++;
            localStorage.setItem(`${this.players[0].player}Wins`, this.players[0].wins);
            return resultMessage;
        };
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

    retrieveHumanWins() {
        return JSON.parse(localStorage.getItem(`${this.players[0].player}Wins`));
    };

    retrieveComputerWins() {
        return JSON.parse(localStorage.getItem(`${this.players[1].player}Wins`));
    }; 
};




