import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import "./css/GameSettings.css";


function GameSettings() {
    function StartGame() {
        ReactDOM.render(
            <React.StrictMode>
                <Game />
            </React.StrictMode>,
            document.getElementById('game')
        );
    }
    return (
        <div className={"GameSettings"}>
            <input type={"checkbox"} className={"slider"} id={"m-slider"} name={"slider"}/>
            <label
            className={"slider-0"}
            htmlFor={"m-slider"}
            >
                <svg
                    viewBox={"0 0 100 80"}
                    height={"40"}
                    width={"40"}
                >
                 <rect
                     width={"60"}
                     height={"10"}
                 ></rect>
                 <rect
                     y={"20"}
                     width={"60"}
                     height={"10"}
                 ></rect>
                 <rect
                     y={"40"}
                     width={"60"}
                     height={"10"}
                 ></rect>
                </svg>
            </label>
            <div
                className={"options"}>
                <input type={"radio"}
                       className={"settings"}
                       id={"one"}
                       name={"settings"} defaultChecked={true}/>
                <label
                    className={"settings-1"}
                    htmlFor={"one"}>Draw One</label>

                <input
                    type={"radio"}
                    className={"settings"}
                    id={"three"}
                    name={"settings"}/>
                <label
                    className={"settings-1"}
                    htmlFor={"three"}>Draw Three</label>
                <button
                    className={"new-game"}
                    onClick={StartGame}
                >New Game</button>
            </div>
        </div>
    )
}

export default GameSettings;
