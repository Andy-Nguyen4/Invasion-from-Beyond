import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/extra.css';

function Extra() {

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate("/game-menu");
    };

    return (
        <div className="extra-container">
            <div className="extra">

                <div className="extra-go-back">
                    <button className="extra-back-btn" onClick={handleGoBack}>Back</button>
                </div>
            </div>
        </div>
    );
}

export default Extra;

