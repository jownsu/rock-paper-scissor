import React from "react";
import "./RockPaperScissor.scss";
import Pentagon from "./components/Pentagon/Pentagon";

import Logo from "../../assets/images/logo-bonus.svg";

function RockPaperScissor() {
    return (
        <div className="container">
            <div className="header">
                <img src={Logo} alt="logo" />
                <div className="score_board">
                    <p>Score</p>
                    <h3>12</h3>
                </div>
            </div>
            <Pentagon />
            <button type="button" className="rules_btn">Rules</button>
        </div>
    );
}

export default RockPaperScissor