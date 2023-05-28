//importation des hooks depuis la bibliothèque react
import { useState, useEffect } from 'react';

//importation des images
import about_ban from '../../assets/about_ban.png';
import about_ban_mobile from '../../assets/about_ban_mobile.png';

//importation du CSS
import './aboutbanner.css';

//fonction qui gérera la logique pour changer l'image en fonction de la largeur de l'image
function useChangeImage() {

    /*initialisation de l'état image avec la valeur about_ban. setImage est une fonction qui permet de mettre à jour la valeur de image.*/
    const [image, setImage] = useState(about_ban);

    /*initialise l'état width avec la valeur window.innerWidth. setWidth est une fonction qui permet de mettre à jour la valeur de width.*/
    const [width, setWidth] = useState(window.innerWidth);

    /*utilisation du hook exécute une fonction de rappel lorsque la dépendance width change. */
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        if (width < 480) {
            setImage(about_ban_mobile); //si < 480px (image mobile)
        } else {
            setImage(about_ban); //sinon image par défaut
        }
        return () => window.removeEventListener('resize', handleResize);
    }, [width]);
    return image;
}

function AboutBanner() {
    return (
        <div className="about-banner">
            <img className="about-banner_img" src={useChangeImage()} alt="bannière de la page à propos" />
        </div>
    )
}

export default AboutBanner;