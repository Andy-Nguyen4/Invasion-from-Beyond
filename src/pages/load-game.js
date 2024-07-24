import React from 'react';
import { useNavigate } from "react-router-dom";
import '../css/load-game.css';

function LoadGame() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/game-menu");
    };

    return (
        <div className="load-game-container">
            <div className="load-game">

                <div className="load-title">
                    <h1>Choose a File to Load</h1>
                </div>

                <div className="load-area">
                    <div className="load-file">
                        <h2>Name: Player1</h2>
                        <h2>Difficulty: Normal</h2>
                        <h2>Date: 5/25/2024</h2>
                    </div>
                    <br></br>
                    <div className="load-file">
                        <h2>Name: Player2</h2>
                        <h2>Difficulty: Hard</h2>
                        <h2>Date: 6/4/2024</h2>
                    </div>
                    <br></br>
                    <div className="load-file">
                        <h2>Name: Player3</h2>
                        <h2>Difficulty: Apocalypse</h2>
                        <h2>Date: 6/20/2024</h2>
                    </div>
                </div>

                <div className="load-game-go-back">
                    <button className="load-game-back-btn" onClick={handleGoBack}>Back</button>
                </div>

            </div>
        </div>
    );
}

export default LoadGame;