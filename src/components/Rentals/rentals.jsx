//importation des images
import full_star from "../../assets/full_star.svg";
import empty_star from "../../assets/empty_star.svg";

//importation du CSS
import "./rentals.css";

function Rentals({ product, title, location, tags, host, rating }) {
    // déclaration d'une variable stockant les étoiles dans un tableau
    let stars = [];
    // Boucle pour afficher les étoiles pleines
    for (let x = 0; x < rating; x++) {
        stars.push(<img key={product.id + x} className="full" src={full_star} alt="avis étoile pleine" />);
    }
    // Boucle pour afficher les étoiles vides
    for (let i = stars.length; i < 5; i++) {
        stars.push(<img key={product.id + i} className="empty" src={empty_star} alt="avis étoile vide" />);
    }

    return (
        <div className="infos">
            <div className="rentals_infos">
                <h1 className="rentals_title">{title}</h1>
                <p className="rentals_location">{location}</p>
                <div className="rentals_tags">
                    {tags.map((tag, rental) => (
                        /*indique que pour chaque élément tag du tableau tags, une fonction est exécutée avec 
                        deux arguments : tag représente l'élément actuel du tableau et rental représente l'index de l'élément dans le tableau*/
                        <p key={rental} className="rentals_tag_name">{tag}</p>
                    ))}
                </div>
            </div>
            <div className="host_infos">
                <div className="host">
                    <p className="host_name">{host.name}</p>
                    <img className="host_img" src={host.picture} alt="host" />
                </div>
                <div className="rating_host">
                    <p className="rating_stars">{stars}</p>
                </div>
            </div>
        </div>
    )
}

export default Rentals;

