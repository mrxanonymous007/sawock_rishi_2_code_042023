//importation de composant de la bibliothèque react-router
import { Link } from 'react-router-dom';

//importation d'un hook de la bibliothèque de react
import { useState } from "react";

//importation de JSON
import Rentals from '../../data/rentals.json';

//importation du CSS
import './card.css';

function Card() {
    /*utilise le hook useState pour initialiser l'état rentals avec les données importées du fichier JSON*/
    const [rentals] = useState(Rentals);
    return (
        //rend une liste de cartes de location en utilisant la méthode .map() sur le tableau rentals
        <div className="gallery">
            {rentals.map((rental) => (
                <Link to={`/rental/${rental.id}`} key={rental.id} className="card_link">
                    <div className="card_container">
                        <img className="card_img" src={rental.cover} alt="images des logements" />
                        <div className="card_title">
                            {rental.title}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Card;

