import React from "react";
import "./Chip.scss";

function Chip(props) {
    const {
        type = "", 
        onClick = () => {}, 
        large = false,
        winner = false
    } = props;
    return (
        <button 
            type="button" 
            className={`chip ${type} ${large && "large"} ${winner && "winner"}`}
            onClick={onClick}    
        >
            <span className={`chip_logo ${type} ${large && "large"}`}></span>
    </button>
    )
}

export default Chip