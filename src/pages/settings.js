import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/settings.css';

function Settings() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/game-menu");
    };

    return (
        <div className="settings-container">
            <div className="settings">

                <div className="settings-title">
                    <h1>Settings</h1>
                </div>

                <div className="volume-music">
                    <label for="music">Music Volume</label>
                    <br></br>
                    <input type="range" name="music" id="music" value="5" min="0" max="10"></input>
                </div>

                <div className="volume-sound">
                    <label for="sound">Sound Volume</label>
                    <br></br>
                    <input type="range" name="sound" id="sound" value="5" min="0" max="10"></input>
                </div>

                <div className="settings-go-back">
                    <button className="settings-back-btn" onClick={handleGoBack}>Back</button>
                </div>

            </div>
        </div>
    );
}

export default Settings;