
import React, { useEffect, useState } from "react";
import Chip from "../Chip/Chip";

import "./CompareChip.scss";

const CHIPS = ["scissors", "paper", "rock", "lizard", "spock"];
const RULES = {
    "scissors"  : ["paper", "lizard"],
    "paper"     : ["rock", "spock"],
    "rock"      : ["lizard", "scissors"],
    "lizard"    : ["spock", "paper"],
    "spock"     : ["scissors", "rock"],
};
const RESULT = ["Tie!", "You Win", "You Lose"];

function CompareChip(props) {

    const {
        player = "", 
        onPlayAgainClick = () => {},
        onWin = () => {},
        onLose = () => {}
    } = props;
    
    const [computer, setComputer] = useState(null);
    const [winner, setWinner] = useState(null);

    useEffect(() => {
        
        const timeoutId = setTimeout(()=>{
            let random_number = Math.floor(Math.floor(Math.random() * 5));
            setComputer(CHIPS[random_number]);
            calculateResult(CHIPS[random_number]);
        }, 2000);

        return () => {
            clearTimeout(timeoutId);
        }
        /* eslint-disable-next-line react-hooks/exhaustive-deps */
    }, []);
    
    const calculateResult = (computer) => {
        if(player === computer){
            setWinner(0);
        }
        else if(RULES[player].includes(computer)){
            setWinner(1);
            onWin();
        }
        else{
            setWinner(2);
            onLose();
        }
    }

    return (
        <div className="compare_chip">
            <div className="player">
                <h4>You picked</h4>
                <Chip 
                    type={player} 
                    winner={RESULT[winner] === "You Win"}
                    large 
                />
            </div>

            {
                computer &&
                <div className="result">
                    <h3>{RESULT[winner]}</h3>
                    <button type="button" onClick={onPlayAgainClick}>Play Again</button>
                </div>
            }
  
            <div className="computer">
                <h4>The house picked</h4>
                <Chip 
                    type={computer} 
                    winner={RESULT[winner] === "You Lose"}
                    large 
                />
            </div>
        </div>
    )
}

export default CompareChip;