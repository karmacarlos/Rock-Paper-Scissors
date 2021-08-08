class Player {
    constructor(name) {
        this.player = name;
        this.wins = 0;
    };

    takeTurn(fighters) {
        computerChoice = fighters[Math.floor(Math.random() * fighters.length)];
        return computerChoice;
    };
};