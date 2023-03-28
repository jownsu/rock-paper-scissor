import React, { useState } from "react";
import "./RockPaperScissor.scss";
import Pentagon from "./components/Pentagon/Pentagon";
import RulesModal from "./components/Rules/RulesModal";
import CompareChip from "./components/CompareChip/CompareChip";
import Logo from "../../assets/images/logo-bonus.svg";

function RockPaperScissor() {

    const [showRules, setShowRules] = useState(false);
    const [playerChip, setPlayerChip] = useState(null);
    const [score, setScore] = useState(0);

    return (
        <div className="container">
            <div className="header">
                <img src={Logo} alt="logo" />
                <div className="score_board">
                    <p>Score</p>
                    <h3>{score}</h3>
                </div>
            </div>

            {
                playerChip 
                ? <CompareChip 
                    player={playerChip} 
                    onPlayAgainClick={() => setPlayerChip(null)} 
                    onWin={() => setScore(prevScore => prevScore + 1)}
                    onLose={() => setScore(prevScore => prevScore - 1)}
                />
                : <Pentagon onChipClick={type => setPlayerChip(type)} />
            }
            
            <button 
                type="button" 
                className="rules_btn"
                onClick={() => setShowRules(true)}
            >
                Rules
            </button>
            { showRules && <RulesModal onHide={() => setShowRules(false)} /> }
        </div>
    );
}

export default RockPaperScissor