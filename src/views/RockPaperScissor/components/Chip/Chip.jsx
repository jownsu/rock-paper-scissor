import React from "react";
import "./Chip.scss";

function Chip({type = "", onClick = () => {}, large = false}) {
    return (
        <button 
            type="button" 
            className={`chip ${type} ${large && "large"}`}
            onClick={onClick}    
        >
            <span className={`chip_logo ${type} ${large && "large"}`}></span>
    </button>
    )
}

export default Chip