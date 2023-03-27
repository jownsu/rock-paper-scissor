
import React from "react";
import Chip from "../Chip/Chip";
import "./Pentagon.scss";

function Pentagon({onChipClick = () => {}}) {
    return (
        <div className="pentagon">
            <Chip type="scissors" onClick={() => onChipClick("scissors")} />
            <Chip type="paper"    onClick={() => onChipClick("paper")} />
            <Chip type="rock"     onClick={() => onChipClick("rock")} />
            <Chip type="lizard"   onClick={() => onChipClick("lizard")} />
            <Chip type="spock"    onClick={() => onChipClick("spock")} />
        </div>
    )
}

export default Pentagon