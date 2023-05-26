import { useParams } from 'react-router-dom';

import RentalDetails from "../../data/rentals.json";

import Error404 from '../../components/Error/error';
import Rentals from '../../components/Rentals/rentals';
import Slideshow from '../../components/Slideshow/slideshow';
import Collapse from '../../components/Collapse/collapse';

import './rental.css';

function Rental() {
    const params = useParams();

    //Va chercher le logement correspondant à cette id sinon page erreur
    const product =
        RentalDetails.find((product) => params.id === product.id);
    if (product === undefined) {
        return <Error404 />;
    }

    const key = product.id;
    const pictures = product.pictures;
    const title = product.title;
    const location = product.location;
    const tags = product.tags;
    const host = product.host;
    const rating = product.rating;
    const description = product.description;
    const equipments = product.equipments;

    return (
        <section className="rental_container">

            <Slideshow
                key={key}
                pictures={pictures}
            />

            <div className="lodgings_infos">
                <Rentals
                    key={key}
                    product={product}
                    title={title}
                    location={location}
                    tags={tags}
                    host={host}
                    rating={rating}
                />
            </div>

            <div className="rental_collapse">

                <div className="collapse_description">
                    <Collapse
                        title="Description"
                        texte={description}
                    />
                </div>

                <div className="collapse_equipments">
                    <Collapse
                        title="Equipements"
                        texte={equipments.map((equipment, list) => (
                            <li key={list} className="list_equipments">{equipment}</li>
                        ))}
                    />
                </div>

            </div>
        </section>
    );
}

export default Rental;

