import React from "react";
import ReactDOM from "react-dom";
import Cards from "./gameData/Cards";
import CardsDraw from "./gameData/CardsDraw";
import CardsPlay from "./gameData/CardsPlay";
import CardsPoints from "./gameData/CardsPoints"
import ObjectsSections from "./gameObjects/ObjectsSections";
import ObjectsCard from "./gameObjects/ObjectsCard";

class NewGameData extends React.Component {
    constructor(id) {
        super();
        this.CardsDeck = new Cards();
        this.DrawCards = new CardsDraw();
        this.PlayCards = new CardsPlay();
        this.Points = new CardsPoints();

        this.id = id;
        this.drawCount = document.querySelector('input[name = "settings"]:checked').id;
    }

    BuildDeck() {
        //build the deck of cards into a new object
        //creates the full deck of cards
        let y = 0;
        for (let i = 0; i < Object.keys(this.CardsDeck.deck['suits']).length; i++) {
            for (let x = 0; x < Object.keys(this.CardsDeck.deck['values']).length; x++) {
                this.PlayCards.cards[y] = {
                    suit: this.CardsDeck.deck['suits'][i],
                    card: this.CardsDeck.deck['values'][x],
                    img: this.CardsDeck.deck['values'][x] + this.CardsDeck.deck['suits'][i][0] + '.png'
                };
                y++;
            }
        }
    }

    Shuffle() {
        //randomize the deck order
        //Fisher-Yates shuffle
        let shuffle = this.PlayCards.cards.length, temp, random;
        while (0 !== shuffle) {
            random = Math.floor(Math.random() * shuffle);
            shuffle -= 1;
            temp = this.PlayCards.cards[shuffle];
            this.PlayCards.cards[shuffle] = this.PlayCards.cards[random];
            this.PlayCards.cards[random] = temp;
        }
    }

    BuildDraw() {
        //build draw cards section
        //creates the draw cards; remaining cards are used for the game area
        while (this.DrawCards.drawDeck.length < 24) {
            this.DrawCards.drawDeck.push(this.PlayCards.cards.pop());
        }

    }

    TestCard() {
        const test = {
          "id":"test",
          "class":"test",
          "img":"content_assets/cards/00.svg"
        };
        let f = new ObjectsCard(test);
        ReactDOM.render(f.Card(), document.getElementById(this.id));
    }
    BuildSections() {
        let Elements = [];
        const DrawData = {
            0: {
                id: "draw",
                class: "deck",
                key: "0"
            },
            1: {
                id: "drawn",
                class: "deck",
                key: "1"
            },
            2: {
                id: "Points",
                class: "Points",
                key: "2"
            },
            3: {
                id: 0,
                class: "play",
                key: "3"
            },
            4: {
                id: 1,
                class: "play",
                key: "4"
            },
            5: {
                id: 2,
                class: "play",
                key: "5"
            },
            6: {
                id: 3,
                class: "play",
                key: "6"
            },
            7: {
                id: 4,
                class: "play",
                key: "7"
            },
            8: {
                id: 5,
                class: "play",
                key: "8"
            },
            9: {
                id: 6,
                class: "play",
                key: "9"
            },
            10: {
                id: 7,
                class: "play",
                key: "10"
            },
        };
        const Keys = Object.keys(DrawData);
        Keys.forEach(i => {
            let Section = new ObjectsSections(DrawData[i]);
            Elements.push(Section.Columns());
        });
        ReactDOM.render(Elements, document.getElementById(this.id));
    }

    Builder() {
        this.BuildDeck();
        this.Shuffle();
        this.BuildDraw();
        this.BuildSections();
    }
}

export default NewGameData;
