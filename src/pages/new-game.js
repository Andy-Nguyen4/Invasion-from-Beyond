import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/new-game.css';

function NewGame() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/game-menu");
    };

    return (
        <div className="new-game-container">
            <div className="new-game">

                <div className="new-file">
                    <h1>Enter new file name</h1>
                    <label for="file-name">File Name:</label>
                    <input type="text" id="file-name" name="file-name"></input>
                </div>

                <div className="difficulty">
                    <h1>Choose your difficulty</h1>
                    <button className="easy-mode">Easy</button>
                    <button className="normal-mode">Normal</button>
                    <button className="hard-mode">Hard</button>
                    <button className="nightmare-mode">Nightmare</button>
                    <button className="apocalypse-mode">Apocalypse</button>
                </div>

                <div className="new-game-go-back">
                    <button className="new-game-back-btn" onClick={handleGoBack}>Back</button>
                </div>

            </div>
        </div>
    );
}

export default NewGame;