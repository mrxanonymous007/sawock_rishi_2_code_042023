//importation de hook depuis react
import { useState } from "react";

//importation d'une image
import Collapse_arrow from "../../assets/collapse_arrow.svg";

//importation du CSS
import "./collapse.css";

/*fonction définit le composant Collapse qui prend deux props : title (le titre de la section) 
et texte (le contenu de la section)*/
function Collapse({ title, texte }) {

    /*initialisation de l'état etat avec la valeur false. setEtat est une fonction qui permet de mettre à jour la valeur de l'état. */
    const [etat, setEtat] = useState(false);

    return etat ? (
        //fonction setEtat au clic est à false (pliée)
        <div className="collapse_container" onClick={() => setEtat(false)}>
            <div className="collapse_content">
                <p className="collapse_title">{title}</p>
                <img className="collapse_arrow" src={Collapse_arrow} alt="flèche cheuvronée pliée" />
            </div>
            <div className="collapse_texte">{texte}</div>
        </div>
    ) : (
        //fonction setEtat au clic est à true (dépliée)
        <div className="collapse_container" onClick={() => setEtat(true)} >
            <div className="collapse_content">
                <p className="collapse_title">{title}</p>
                <img className="collapse_arrow_rotation" src={Collapse_arrow} alt="flèche cheuvronée dépliée" />
            </div>
        </div>
    );
}

export default Collapse;

