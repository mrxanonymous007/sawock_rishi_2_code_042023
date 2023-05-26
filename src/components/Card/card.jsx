import { Link } from 'react-router-dom';
import { useState } from "react";

import Rentals from '../../data/rentals.json';

import './card.css';

function Card() {
    const [rentals] = useState(Rentals);
    return (
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

