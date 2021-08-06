class Player {
    constructor(name) {
        this.player = name;
        this.wins = 0;
    };

    saveWinsToStorage() {

    };

    retrieveWinsFromStorage() {

    };

    takeTurn(fighters) {
        var computerChoice = fighters[Math.floor(Math.random() * fighters.length)];
    };
};