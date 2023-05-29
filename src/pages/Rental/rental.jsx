//importation de hook depuis react-router
import { useParams } from 'react-router-dom';

//importation du fichier json
import RentalDetails from "../../data/rentals.json";

//importation des composants réutilisés
import Error404 from '../../components/Error/error';
import Rentals from '../../components/Rentals/rentals';
import Slideshow from '../../components/Slideshow/slideshow';
import Collapse from '../../components/Collapse/collapse';

//importation du CSS
import './rental.css';

function Rental() {
    const params = useParams();

    //Va chercher le logement correspondant "strictement" à son id
    const product =
        RentalDetails.find((product) => params.id === product.id);
    //renvoi de la page error si aucun id correspond
    if (product === undefined) {
        return <Error404 />;
    }

    //déclaration des variables
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
            <div className="slideshow_images">
                <Slideshow //composant slideshow
                    key={key}
                    pictures={pictures}
                />
            </div>

            <div className="slideshow_infos">
                <Rentals //composante rentals
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
                    <Collapse //composant collapse
                        title="Description"
                        texte={description}
                    />
                </div>

                <div className="collapse_equipments">
                    <Collapse //composant collapse
                        title="Équipements"
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

