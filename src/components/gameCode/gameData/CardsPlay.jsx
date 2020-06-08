class CardsPlay {
    constructor() {
        this.cards = []; //current cards placed in play area
    }

    get Cards() {
        return this.cards;
    }

    set Cards(i) {
        this.cards.push(i);
    }

}

export default CardsPlay;
