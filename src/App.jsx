import React from 'react';
import Header from './components/Header';
import GameSettings from "./components/GameSettings";
import GameBody from "./components/GameBody";

function App() {

    return (
        <div>
            <Header />
            <GameSettings />
            <GameBody />
        </div>
    );
}

export default App;
