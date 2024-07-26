import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/game-menu.css';

function GameMenu() {

    const navigate = useNavigate();

    const handleNewGameClick = () => {
        navigate("/new-game");
    };

    const handleLoadGameClick = () => {
        navigate("/load-game");
    };

    const handleSettingsClick = () => {
        navigate("/settings");
    };

    const handleExtraClick = () => {
        navigate("/extra-content");
    }

    return (
        <div className="game-menu-container">
            <div className="game-menu">

                <div className="title">
                    <h1>INVASION from BEYOND</h1>
                </div>

                <div className="button-area">
                    <button className="new-game-btn" onClick={handleNewGameClick}>New Game</button>
                    <br></br>
                    <button className="load-game-btn" onClick={handleLoadGameClick}>Load Game</button>
                    <br></br>
                    <button className="settings-btn" onClick={handleSettingsClick}>Settings</button>
                    <br></br>
                    <button className="extra-btn" onClick={handleExtraClick}>Extra Content</button>
                    <br></br>
                    <button className="quit-btn">Quit</button>
                </div>

            </div>
        </div>
    );
}

export default GameMenu;