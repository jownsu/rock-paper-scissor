import React from "react";

import RulesImg from "../../../../assets/images/image-rules-bonus.svg";
import "./RulesModal.scss";

function RulesModal({ onHide = () => {} }) {
    return (
        <div className="rules_modal" onClick={onHide}>
            <div className="rules" onClick={(e) => e.stopPropagation()}>
                <button type="button" onClick={onHide}></button>
                <h4>Rules</h4>
                <img src={RulesImg} alt="rules" />
            </div>
        </div>
    )
}

export default RulesModal;