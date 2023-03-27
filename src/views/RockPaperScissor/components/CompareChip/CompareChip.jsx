
import React, { useEffect, useState } from "react";
import Chip from "../Chip/Chip";

import "./CompareChip.scss";

const CHIPS = ["scissors", "paper", "rock", "lizard", "spock"];

function CompareChip({player = "scissors"}) {
    
    const [computer, setComputer] = useState(null);

    useEffect(() => {
        let random_number = Math.floor(Math.floor(Math.random() * 5));
        setComputer(CHIPS[random_number]);
    }, []);
    
    return (
        <div className="compare_chip">
            <div className="player">
                <h4>You picked</h4>
                <Chip type={player} large />
            </div>
            <div className="computer">
                <h4>The house picked</h4>
                <Chip type={computer} large />
            </div>
        </div>
    )
}

export default CompareChip;