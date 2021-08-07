class Player {
    constructor(name) {
        this.player = name;
        this.wins = 0;
    };

    saveWinsToStorage() {
        localStorage.setItem(`${this.player}`, this.wins);
    };

    retrieveWinsFromStorage() {
        return localStorage.getItem(this.player);
    };

    takeTurn(fighters) {
        var computerChoice = fighters[Math.floor(Math.random() * fighters.length)];
        return computerChoice;
    };
};