class Player {
    constructor(name) {
        this.player = name;
        this.wins = JSON.parse(localStorage.getItem(`${this.player}Wins`)) || 0;;
    };

    takeTurn(fighters) {
        computerChoice = fighters[Math.floor(Math.random() * fighters.length)];
        return computerChoice;
    };
};