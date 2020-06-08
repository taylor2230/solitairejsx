class CardsPoints {
    constructor() {
        this.points = {}; //points
    }

    get Points() {
        return this.points;
    }

    set Points(i) {
        let card = i.split("~");
        this.points.card[1].push(card[0]);
    }

}

export default CardsPoints;
