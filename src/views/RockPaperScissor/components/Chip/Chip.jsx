import React from "react";
import "./Chip.scss";

function Chip({type = ""}) {
    return (
        <div className={`chip ${type}`}>
            <span className={`chip_logo ${type}`}></span>
        </div>
    )
}

export default Chip