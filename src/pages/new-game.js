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
                    <button className="easy">Easy</button>
                    <button className="normal">Normal</button>
                    <button className="hard">Hard</button>
                    <button className="nightmare">Nightmare</button>
                    <button className="apocalypse">Apocalypse</button>
                </div>

                <div className="go-back">
                    <button className="back" onClick={handleGoBack}>Back</button>
                </div>

            </div>
        </div>

    );
}

export default NewGame;