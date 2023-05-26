import { useState } from "react";

import Collapse_arrow from "../../assets/collapse_arrow.svg";

import "./collapse.css";

function Collapse({ title, texte }) {
    const [etat, setEtat] = useState(false);

    return etat ? (
        <div className="collapse_container" onClick={() => setEtat(false)}>
            <div className="collapse_content">
                <p className="collapse_title">{title}</p>
                <img className="collapse_arrow" src={Collapse_arrow} alt="flèche cheuvronée pliée" />
            </div>
            <div className="collapse_texte">{texte}</div>
        </div>
    ) : (
        <div className="collapse_container" onClick={() => setEtat(true)} >
            <div className="collapse_content">
                <p className="collapse_title">{title}</p>
                <img className="collapse_arrow_rotation" src={Collapse_arrow} alt="flèche cheuvronée dépliée" />
            </div>
        </div>
    );
}

export default Collapse;

