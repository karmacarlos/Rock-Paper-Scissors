class Player {
    constructor(name) {
        this.player = name;
        this.wins = 0;
    };

    saveWinsToStorage() {
        localStorage.setItem(`${this.player}Wins`, this.wins);
    };

    retrieveWinsFromStorage() {
        return localStorage.getItem(`${this.player}Wins`);
    };

    takeTurn(fighters) {
        computerChoice = fighters[Math.floor(Math.random() * fighters.length)];
        return computerChoice;
    };
};