import home_banner from '../../assets/home_banner.jpg';

import './banner.css';

// Composant Banner
function Banner() {
    return (
        <div className="banner">
            <img className="banner_img" src={home_banner} alt="bannière de la page d'accueil de l'agence Kasa" />
            <div className="banner_text_container">
                <p className="banner_text">Chez vous, <span className="underline">partout et ailleurs</span></p>
            </div>
        </div>
    )
}

export default Banner;

