class CardsDraw {
    constructor() {
        this.drawDeck = []; //draw items
    }

    get DrawDeck() {
        return this.drawDeck;
    }

    set DrawDeck(i) {
        let pos = this.drawDeck.indexOf(i);
        if(pos !== -1) this.drawDeck.splice(pos);
    }
}

export default CardsDraw;
