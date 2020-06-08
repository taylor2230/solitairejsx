class Cards {
    constructor() {
        this.deck = {
            suits:['Spades', 'Clubs', 'Diamonds', 'Hearts'],
            values:['A',2,3,4,5,6,7,8,9,10,'J','Q','K']
        }; //main deck
    }

    get DeckSuit() {
        return this.deck['suits'];
    }

    get DeckValues() {
        return this.deck['values'];
    }
}

export default Cards;
