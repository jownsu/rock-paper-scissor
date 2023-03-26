
import React from "react";
import Chip from "../Chip/Chip";
import "./Pentagon.scss";

function Pentagon() {
    return (
        <div className="pentagon">
            <Chip type="scissors"/>
            <Chip type="paper"/>
            <Chip type="rock"/>
            <Chip type="lizard"/>
            <Chip type="spock"/>
        </div>
    )
}

export default Pentagon