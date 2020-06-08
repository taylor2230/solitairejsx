import React from "react";
import ReactDOM from "react-dom";

import NewGameData from "./GamePackage";
import GameController from "./GameController";

class Solitaire extends React.Component {
    constructor() {
        super();
        this.GameConstructor = new NewGameData("game");
        this.GameController = new GameController();
    }

    StartGame() {
        this.GameConstructor.Builder();
        console.log(this.GameConstructor.DrawCards.DrawDeck);
    }


}

export default Solitaire;
